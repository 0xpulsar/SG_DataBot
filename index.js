var firebase = require('firebase');
firebase.initializeApp({
 
 "serviceAccount": "serviceAccountKey.json",
 
 "databaseURL": "https://databot-8e775.firebaseio.com"
});
var ref = firebase.app().database().ref();
ref.once('value')
 .then(function (snap) {
 console.log('snap.val()', snap.val());
 });

 var ref = firebase.database().ref();
var obj = {
    "type": "service_account",
    "project_id": "databot-8e775",
    "private_key_id": "a140f378260fac7326b05a22cd92773d43c19bde",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5v/2eXwY9c5QD\nCB/7ICN3D2eFKnQop2qkcK3ZNzHLzbfuCwLGqUQn0TLOZDkX/d5sWi/FxtUK0+VE\nTv90yIrd32TJJmulBJn3ky7FkcpPXsICX6+k1QcTN7aZ3MdGJ2MXFntEnBOi8WVf\nvMMr6bbtiTc+c0yltyHssBMvytguglkJx43JUD3mspK7h7O33wZcAa+1tCE8ZF6i\nMAr4ZzW+ls1GbD7Uo/fwzPMarmQx0k/3zuykLNZCl+OCNwaQqh23qlotHxsG6A99\nYfzu7sT2v7fljo1rn3bv516dmgrn5SHXRGSmJahy3uzIsVrx7vr+bRf6lBcNN4QI\nmlddijKJAgMBAAECggEAAITtA8tS5bLUQjWvBnH4q+St1r9g+HuIFUAl4r9pf0uc\nld2vbi0jfkKnELmFQ0q2i/KnAFSa7tDhUJwtshxAsPkA7Z4gYYFnXfIv6JVRkf6C\nb0LBrVBp/4BXfG9XhMOi3od/a0ER+A7YjDv35BxoxjcGE0GwIEfIWpjVVNYrXcGE\nsBiu60DAzgSj6oMnR0HlPreJVFR06nvtBM+97yEBzvtzXmbZbyTfNmzq217e9aBd\nqTD1zzNrF/4GpvRoRxrO4OeTBtdMCvTGooL18PxPO2NhISi8TP8CPfe6Jm1DiB3b\nW1MhkygTEXF61yWl4eikES55HzpLKo8DkJ7dOGolsQKBgQDsSLdO3oo0XaV1rsq6\nopEPSlAPrRsis/MZaEAuuQU6w5enHykzUO9wWzOYP51uOa65qH5taUmiZ4rnS9ID\nhG0Q4f1XAF1jN4tnPGpd939yB2yeJnqzUsV3Zq3gXLq1OJpAA6nKvbuj3t1MrIQW\nJwt2+UvWCBsrAi3J1H3AYOmOeQKBgQDJP8/NWmWqMsgsTC890RfYZGAjCJr6y0r4\njsvr0gEE42Busz6441otBxCvQPfH6EKl0XHwFMV6U11YFcUBW7yvOyAceOvzJs7o\ni0wBbe9raLglsSTmFyClRjRIxiKLyHadH2bj+A2P2fYlMQAKWK8t/ayHTr+IIYEP\n2oOisSSAkQKBgGTJo791t7gclf5736f6viuqhDobme6UmcalrHMBoxRs6Bx2c0mb\nZXckv/5abFnfKwOwtrUO60TmK977fYrYivlfnIPm+O7ge4s+vxR0BR3rws43FbG2\nRdrnppWEmHPCwDE8HsoHYqnE39rb37/fScmnD00tygDvff6QsE9GR3npAoGAWXhV\nGiamLBSHiaoVFpZu03VMiEa7H+RhYD+bySuD6Hht1sk5iVkKLhqGAGQRxH4toyqK\nTQHvCYMmbJLBEumF6SGQFRhtTZxjQF8tWzVUy5uywo8OqHx/tvqPJAtyMFLe6Nud\nEpyk6t8r3zz5l5/1wayVl1IbNJowlqu++gVnBQECgYAcyEEit4Ivz5fvanRGxFpj\n3KAAcPazkJNEcvIoyDCkrPyyOF46mu8ZqDqr5iZVWWWoX1XSA2OrwVXC2WrDunDc\npP4dgN6K6/QfF1E0FgAour6LYUq5d7ngmp9VgTgLiwfrzmEX5o6hMYRtAWSxlb4T\n026GDN1xnLd74YHdT6n1ng==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-mqlv6@databot-8e775.iam.gserviceaccount.com",
    "client_id": "109509892928788268729",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mqlv6%40databot-8e775.iam.gserviceaccount.com"
  }
ref.push(obj);   // Creates a new ref with a new "push key"
ref.set(obj);    // Overwrites the path
ref.update(obj); // Updates only the specified attributes 
