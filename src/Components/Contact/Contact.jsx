import React from "react";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "192ff544-bfb4-474e-a728-19ebbd7c9ab5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       "Accept": "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section id="contact" className="contact-container">
      <form onSubmit={onSubmit}>
         <h2>Contact form</h2>
         <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="enter your name" name="name" required />
         </div>
         <div className="input-box">
            <label>Email Address</label>
            <input type="email" className="field" placeholder="enter your email" name="email" required />
         </div>
         <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" id="message" placeholder="enter your message" required></textarea>
         </div>
         <button type="submit">Send Message</button>
      </form>
      <div className="contact-second">
        <div className="contact-second-makesomething">
          <h2>LET'S MAKE SOMETHING</h2>
          <h1>Need more information or want to get in touch?</h1>
        </div>
        <div className="contact-second-getintouch">
          <h3>Get in touch</h3>
          <div className="contact-second-getintouch-socialicons">
            <a href="https://github.com/sonakshimathur07">
              <img src="data:image/png;base64,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" height="30px" width="30px"alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/sonakshi-mathur07">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAAD8/PxhYWGBgYGfn5/AwMAjIyPY2NhEREQ5OTmbm5sUFBRpaWn5+fny8vKHh4fg4ODR0dEyMjK2trbHx8evr68aGhrp6emOjo5LS0tcXFwICAhSUlIqKipzc3NtJewoAAAEXklEQVR4nO2d25aqMAxAW4WKIxe5CsLI///l0XHNiCM0OA2nDSv7GZbZQkPTCwgpz4FYAdleSiF3he04cCh2V5nIdhRYbKXoSttBYFF24mNjOwgsNrnwbMeAhydW0vxvFCK1HQIeqUhsh4DHilQYhmEYhmEYmiRpVqpClVka2w7FlKA6tpdOShnm0UHVtsMxIfA/5YBTVJHViasnlbsO0TGdutn9drmSV7bj+gt1P6JyazxH25G9T+KNu1zxbcf2LvFh0kVKZTu6Nyk1LnJHK6fFHzoZ6ZEa2q20LjInlaDHkvIQShlN22JutIQGd4+QDKVZtzMkIw+2Q5xNAjWZaz4jM1hdwzI9mUdNegJltmQyQADLRGRkZtxmEZnbbFUJQOh7Zjca2yHOZ6IuexASqjcLSOac2Q5xPjEk01OqAYD7bEfoLgMvTUtrcFNbnV1I1WbXR02kkSGUl++k02UAqdZ/J5uyieg8/B9k7ajLkUyv7Im66V7bfkXxutyI1e+L4wX02ssPcTZ8fB7IT55tMt+LtpFXkSnHGIZhGIZh/gubOPlaMKUqpVSZBXWSxER7sXVQHNvLsEPe5e2xytIlKow00DFSn9VvHJ9kxdQQw75RAbqP97HX8DqisalyzfFPk4aJ8vIJlW8fZJ3xkvmnRnuV8WceH6senGO4eAq1cNqiyjyWDQS99qp8k3uYG2IXkqn2c1Ru7Cu81LaMTB/OdZEybNButSVkYnh5wRM9ls0CMums1jJki2SDLxO8eV2+fgen3aDL1LqR+ElwVrVgyyTg2qJxUKYbsWWqN/LYkDPGyDauTFPDk/HjdBhzQagyndf80UXKD4QbDffKXOAlH9O/ZZ6fcWVM2JtfGndkZGP8sHFIxnxxq0MynfHiVodkZGNaeLokY/zmIpdkjHeFOCXjGz5qnJIxXXfslExumJyXlDk3RRnUaaYO+gGtB4adgKVkws/n5V3lrFq6MOsELCPTfb7+x/4FPs9woGYRmXC0mxXAY2mGC6mWkAkn9kRmoM3ePZnJ0QkFNRzD7YcLyPSTf28CFqJmuRlfRlf/gjeaWW7GlzloMtIGGogy652hy+ir3wJoNWYlDbrMUfuoqPW/Z7g3HFsG2tYxvcf9/lc4JQNt6/D1O8PMXi2JLTOdl+8Aj5reKRnoPgH6NGavlkWWOUEtOHl598gTW5dkcii3xvrSxikZeIxVPxfllEwL9hT1udktGbAPr5dpXZLZgjIjmygGmL2PGVsGrHsJyURgMKuSOWhncInJ+GuSWdWVYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYZnVy+RGMlG40/C6fvwqozn+BL+pyL/ozj8byWRKx8g28FR7QgYGoz+f2Lv7GYZhGIZhGIZZFuqfkhmQiBV9TiYQhD5WDFEIs13pTtGLfDWNJr6IzvR9bs6gOmG4X9ghWinkidRHMafxQ/kPurlc6bKqlncAAAAASUVORK5CYII="height="30px" width="30px" alt=""/>
            </a>
          </div>
        </div>
        <div className="contact-second-reachme">
          <div className="contact-second-reachme-mail">
            <h3>Reach me</h3>
            <h4>sonakshimathur117@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Contact;