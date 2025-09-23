import { useAuth } from '../../context/AuthContext';

const DataSources = () => {
  const { currentUser } = useAuth();

  const getConstantContactOAuthUrl = () => {
    const baseUrl = "https://authz.constantcontact.com/oauth2/default/v1/authorize";
    const clientId = "6a440f43-5937-44c6-8cb4-38c1c3191af6";
    const redirectUri = "https://constant-contact-oauth-callback-labxq2ztea-uc.a.run.app";
    const scope = "contact:read campaign:read";
    const state = currentUser ? currentUser.uid : 'FIREBASE_USER_ID_HERE';

    return `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}`;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Data Sources</h1>
      <a href={getConstantContactOAuthUrl()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Connect with Constant Contact
      </a>
    </div>
  );
};

export default DataSources;