import "./Contacts.css"

export function Contacts() {
  return (
    <section className="contactsContent" id="contactsContent">
      <div className="infoContact">
        <h2>Contacts</h2>
        <p>If you liked my work, contact me through any of the following means:</p>
        <div className="contacts">
            <p><i className='bx bxs-map'></i>Cl. 16 #55-129</p>
            <p><i className='bx bxs-phone'></i>+57 302 367 87 14</p>
            <p><i className='bx bxs-envelope' ></i>lissharik@gmail.com</p>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3378581743473!2d-75.58619518993595!3d6.21910099374291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44293f0e114eef%3A0x99610cdd44c7c081!2sRiwi%20-%20Be%20a%20Coder!5e0!3m2!1ses-419!2sco!4v1711924771846!5m2!1ses-419!2sco"

          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
