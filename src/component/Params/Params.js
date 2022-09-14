import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useParams, Link } from "react-router-dom";
import data from "../Massiv";
import Navbar from "../Navbar/Navbar";
import "./Params.css";

const Params = () => {
  const params = useParams();
  const cuurrentData = data.find((el) => {
    return el._id === params.id;
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ziscuy9",
        "template_grk38vp",
        form.current,
        "FR6ogkfQNwmNxqDdr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Navbar />
      <div className="lin">
        <Link to="/">Bosh Sahifa</Link>
        <Link to="/model">Modellar</Link>
        <Link to="">Buyurtma</Link>
      </div>
      <h1>Orqaga qongiroq</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="cart">
              <img src={cuurrentData.image} class="cadt-img-top" alt="" />
              <div class="card-body">
                <h4>{cuurrentData.name}</h4>
                <p>{cuurrentData.price} somdan</p>
                <h6>Dvigatel</h6>
                <p>{cuurrentData.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="reg">
              <h5>Sizning aloqalar</h5>
              <p>Belgilangan joyni toldirish majburiydir</p>

              <form ref={form} onSubmit={sendEmail} class="form-floating mb-3">
                <input
                  name="user_name"
                  type="name"
                  required="required"
                  class="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Ism</label>
                <div class="form-floating">
                  <input
                    name="user_phone"
                    type="text"
                    required="required"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="+998 (__) ___-__-__ "
                  />
                  <label for="floatingPassword">Telefon raqam</label>
                </div>
                <select
                  name="user_questions"
                  required="required"
                  type="text"
                  class="form-select"
                >
                  <option data-v-e3a1d832="" value="">
                    Savol turini tanlang|
                  </option>{" "}
                  <option
                    data-v-e3a1d832=""
                    value=" Kia avtomobilining mavjudligi va etkazib berish jarayoni"
                  >
                    Kia avtomobilining mavjudligi va etkazib berish jarayoni{" "}
                  </option>
                  <option
                    data-v-e3a1d832=""
                    value=" Kia ehtiyot qismlari va aksessuarlarining mavjudligi va
                    narxi"
                  >
                    Kia ehtiyot qismlari va aksessuarlarining mavjudligi va
                    narxi
                  </option>
                  <option
                    data-v-e3a1d832=""
                    value=" Servis xizmatini ko&amp;rsquo;rsatish (TXK, kafolat,
                    foydalanish)"
                  >
                    Servis xizmatini ko&amp;rsquo;rsatish (TXK, kafolat,
                    foydalanish)
                  </option>
                  <option
                    data-v-e3a1d832=""
                    value="  Kredit va sug'urta shartlari"
                  >
                    Kredit va sug'urta shartlari
                  </option>
                  <option data-v-e3a1d832="" value="Test -drayvdan o'tish">
                    Test -drayvdan o'tish
                  </option>
                  <option data-v-e3a1d832="" value="Boshqa">
                    Boshqa
                  </option>
                  <option
                    data-v-e3a1d832=""
                    value=" Kia avtomobilining xususiyatlari va narxi"
                  >
                    Kia avtomobilining xususiyatlari va narxi
                  </option>
                  <option
                    data-v-e3a1d832=""
                    value=" Korporativ mijozlar uchun shartla"
                  >
                    Korporativ mijozlar uchun shartlar
                  </option>
                </select>
                <textarea
                  data-v-e3a1d832=""
                  name="message"
                  type="message"
                  placeholder="Sizning fikringiz yoki savolingiz"
                  class="form-control"
                ></textarea>
                <button
                  type="submit"
                  value="Send"
                  id="butt"
                  class="btn btn-outline-primary"
                  
                >
                 Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Params;
