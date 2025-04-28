export default function Contact() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 ">Get In Touch</h1>
        <p className="text-lg /70 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out
          directly via email.
        </p>
      </div>

      <div className="bg-accent/5 rounded-lg shadow-lg p-8 text-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold  mb-4">Ready to connect?</h2>
          <p className="/70 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a
            href="mailto:phantommy38@gmail.com"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
