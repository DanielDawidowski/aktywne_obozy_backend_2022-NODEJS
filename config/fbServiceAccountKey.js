module.exports = {
  type: "service_account",
  project_id: "aktywne-obozy-new",
  private_key_id: process.env.FB_KEY_ID,
  private_key: process.env.FB_KEY.replace(/\\n/g, "\n"),
  client_email:
    "firebase-adminsdk-znf7r@aktywne-obozy-new.iam.gserviceaccount.com",
  client_id: "115772173880659639633",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-znf7r%40aktywne-obozy-new.iam.gserviceaccount.com",
};
