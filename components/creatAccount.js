async function addCustomer() {
  console.log("Je suis entrez");
  // crypt
  let secure_key = "";

  // date du jour
  let now = new Date();
  let formatted_now = now.getFullYear();
  +"-" +
    now.getMonth() +
    "-" +
    now.getDay() +
    " " +
    +now.getHours() +
    ":" +
    +now.getMinutes() +
    ":" +
    +now.getSeconds();
  // 2021-01-20 12:19:16
  let newsletter_date_add = formatted_now;
  let last_passwd_gen = formatted_now;
  let date_add = formatted_now;
  let date_upd = formatted_now;

  let id_shop_group = 1;
  let id_shop = 1;
  let id_default_group = 3;
  let id_lang = 1;
  let id_risk = 0;
  let company = "";
  let siret = "";
  let ape = "";
  let newsletter = 1;
  let ip_registration_newsletter = "";
  let optin = 0;
  let website = "";
  let outstanding_allow_amount = "";

  let show_public_prices = 0;
  let max_payment_days = 0;

  let note = "";
  let active = 1;
  let is_guest = 0;
  let deleted = 0;

  let reset_password_token = "";

  let reset_password_validity = "0000-00-00 00:00:00";

  //let id_customer=document.getElementById("");
  let firstname = document.getElementById("validationDefault01").value;
  let lastname = document.getElementById("validationDefault02").value;
  let email = document.getElementById("validationCustomMail").value;
  let birthday = document.getElementById("validationDefault05").value;
  let passwd = document.getElementById("validationDefault03").value;
  let id_gender = 1;

  let backId;

  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic R0NFUjNIRjdJOE1HUFJSRk5WVDRBTENVUFRGR1pUWTQ6"
  );
  myHeaders.append(
    "Cookie",
    "PrestaShop-4bc70bc50aed6ee68deba88c9e5ad373=def50200b6698534ba9b48a769788da24e7f1cd95aef65be9b104131457b4db3c1b870d6d1f113c88b99f128dd9e56bd3e0b74498da00b59348ba495b8608702da0216db9ecfda282e4e072ebd1cc580b3125350bbfcf0809e9ddb8b285d56c36ee283a5db62b9c5ba7ca21ae2cfc40bf1abd725d008d260627c4665ce0e2de1b97fb05bbfcadbda660ffca37bf67a147111cf62e5d9cecd67d57b7de2b656c4b775e93b6f8067f0489653404a03b3992a066e21cd0ac506f4392e1bdd1a91dbf67093ad7bbdf8c8ff938ed2daeb52f2dbfe7bd356da9ece68"
  );

  let myInit = {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
    body: JSON.stringify({
      firstname: firstname,
      id_gender: id_gender,
      lastname: lastname,
      email: email,
      birthday: birthday,
      passwd: passwd,
      date_upd: date_upd,
      date_add: date_add,
      last_passwd_gen: last_passwd_gen,
      newsletter_date_add: newsletter_date_add,
      id_shop_group: id_shop_group,
      id_shop: id_shop,
      id_default_group: id_default_group,
      id_lang: id_lang,
      id_risk: id_risk,
      company: company,
      siret: siret,
      ape: ape,
      newsletter: newsletter,
      ip_registration_newsletter: ip_registration_newsletter,
      optin: optin,
      website: website,
      outstanding_allow_amount: outstanding_allow_amount,
      show_public_prices: show_public_prices,
      max_payment_days: max_payment_days,
      note: note,
      active: active,
      is_guest: is_guest,
      deleted: deleted,
      reset_password_token: reset_password_token,
      reset_password_validity: reset_password_validity,
      secure_key: secure_key,
    }),
  };

  let myReq = "http://127.0.0.1/prestashop/api/customers/";
  console.log("myreq :  " + myReq);

  let result = await fetch(myReq, myInit);
  console.log("Customer créée : ID " + result);
}
