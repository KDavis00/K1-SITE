export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Want to work together or just say hi? Send me a message!</p>
      <form 
        action="https://formspree.io/f/your-form-id" 
        method="POST" 
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
