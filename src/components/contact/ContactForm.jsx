import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Section, Container, SectionHeading, Input, Textarea, Button } from '@components/ui';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        e.target.reset();
      }, 5000);
    }, 1500);
  };

  return (
    <Section bg="muted" spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <SectionHeading
              label="Get In Touch"
              title="Send Us a Message"
              subtitle="Have a question or need assistance? Fill out the form below and our team will get back to you promptly."
              align="center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-surface-200 relative overflow-hidden"
          >
            {/* Success Overlay */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-surface-600 max-w-md">
                  Thank you for reaching out. We have received your message and will respond to the email address provided shortly.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
                <Input
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                />
                <Input
                  label="Subject"
                  id="subject"
                  type="text"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <Textarea
                label="Your Message"
                id="message"
                placeholder="Please provide as much detail as possible..."
                rows={6}
                required
              />

              <div className="pt-4 flex justify-end">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto min-w-[200px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactForm;
