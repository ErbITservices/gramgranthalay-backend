const mongoose = require("mongoose");

const storageSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  lname: {
    type: String,
  },
  categoryoflibrary: {
    type: String,
  },
  gam: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  pin: {
    type: String,
  },
  pin: {
    type: String,
  },
  taluko: {
    type: String,
  },
  sthapnadate: {
    type: String,
  },
  district: {
    type: String,
  },
  male: {
    type: String,
  },
  female: {
    type: String,
  },
  studypeople: {
    type: String,
  },
  studymale: {
    type: String,
  },
  studyfemale: {
    type: String,
  },
  studychild: {
    type: String,
  },
  lavaj: {
    type: String,
  },
  lavajamount: {
    type: String,
  },
  workinghourslibrary: {
    type: String,
  },
  workinghoursbooks: {
    type: String,
  },
  handleby: {
    type: String,
  },
  registernumber: {
    type: String,
  },
  emailmen: {
    type: String,
  },
  emailmenaddres: {
    type: String,
  },
  libraryen: {
    type: String,
  },
  libraryenaddres: {
    type: String,
  },
  libraryeneducation: {
    type: String,
  },
  libraryensalary: {
    type: String,
  },
  housestate: {
    type: String,
  },
  houserent: {
    type: String,
  },
  hosestatus: {
    type: String,
  },
  aircondition: {
    type: String,
  },
  openforevryone: {
    type: String,
  },
  lastyearbookcount: {
    type: String,
  },
  currentyearbookcount: {
    type: String,
  },
  lastyearaddedbook: {
    type: String,
  },
  endyearabookcount: {
    type: String,
  },
  publishbook: {
    type: String,
  },
  newspapercount: {
    type: String,
  },
  newpaper: {
    type: String,
  },
  parigrahan: {
    type: String,
  },
  register: {
    type: String,
  },
  deadregister: {
    type: String,
  },
  attendencregister: {
    type: String,
  },
  anualrequest: {
    type: String,
  },
  recieptbook: {
    type: String,
  },
  voucherbook: {
    type: String,
  },
  rojmel: {
    type: String,
  },
  commandbook: {
    type: String,
  },
  publishregister: {
    type: String,
  },
  followinstructoin: {
    type: String,
  },
  whichlevel: {
    type: String,
  },
  requirment: {
    type: String,
  },
  grant: {
    type: String,
  },
  vanchansamagrik: {
    type: String,
  },
  vanchansamagrim: {
    type: String,
  },
  pagark: {
    type: String,
  },
  pagarm: {
    type: String,
  },
  note1: {
    type: String,
  },
  note2: {
    type: String,
  },
  note3: {
    type: String,
  },
  furnichark: {
    type: String,
  },
  furnicharm: {
    type: String,
  },
  otherm: {
    type: String,
  },
  otherk: {
    type: String,
  },
  alavajam: {
    type: String,
  },
  aintrest: {
    type: String,
  },
  arent: {
    type: String,
  },
  agrant: {
    type: String,
  },
  ahelp: {
    type: String,
  },
  adistrict: {
    type: String,
  },
  ataluko: {
    type: String,
  },
  agam: {
    type: String,
  },
  aotherhelp: {
    type: String,
  },
  aother: {
    type: String,
  },
  aprevios: {
    type: String,
  },
  kbook: {
    type: String,
  },
  knewspaper: {
    type: String,
  },
  kbookbinding: {
    type: String,
  },
  kinfletion: {
    type: String,
  },
  ksalary: {
    type: String,
  },
  kother: {
    type: String,
  },
  kfurnichar: {
    type: String,
  },
  kfurnicharrepair: {
    type: String,
  },
  kotherbuy: {
    type: String,
  },
  krent: {
    type: String,
  },
  krepair: {
    type: String,
  },
  ktax: {
    type: String,
  },
  kstationary: {
    type: String,
  },
  kmail: {
    type: String,
  },
  ktrip: {
    type: String,
  },
  kpremium: {
    type: String,
  },
  klightbill: {
    type: String,
  },
  kothersmall: {
    type: String,
  },
});

//create model
const Storage = mongoose.model("Storage", storageSchema);

module.exports = Storage;
