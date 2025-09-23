import functions_framework
from flask import jsonify
from firebase_admin import auth, initialize_app
from google.cloud import bigquery

initialize_app()

@functions_framework.http
def get_dashboard_data(request):
    # Set CORS headers for the preflight request
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*', # Replace with your frontend's domain
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Authorization',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*' # Replace with your frontend's domain
    }

    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return (jsonify({"error": "Unauthorized"}), 401, headers)

    id_token = auth_header.split('Bearer ').pop()
    try:
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid']
    except Exception as e:
        return (jsonify({"error": "Invalid token", "message": str(e)}), 401, headers)

    client = bigquery.Client()

    # Query contacts
    contacts_query = f""" 
        SELECT * FROM `nicks-data-app.nicks_data_app_data.contacts` 
        WHERE tenant_id = @user_id
    """
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("user_id", "STRING", uid),
        ]
    )
    contacts_query_job = client.query(contacts_query, job_config=job_config)
    contacts = [dict(row) for row in contacts_query_job]

    # Query campaigns
    campaigns_query = f"""
        SELECT * FROM `nicks-data-app.nicks_data_app_data.campaigns`
        WHERE tenant_id = @user_id
    """
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("user_id", "STRING", uid),
        ]
    )
    campaigns_query_job = client.query(campaigns_query, job_config=job_config)
    campaigns = [dict(row) for row in campaigns_query_job]

    data = {
        "contacts": contacts,
        "campaigns": campaigns
    }

    return (jsonify(data), 200, headers)
