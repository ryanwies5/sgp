import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions or want to learn more? Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-card rounded-xl border shadow-sm p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
