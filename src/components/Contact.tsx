import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact MEDSAF CAR
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-[#5E67B6]" />
              <div>
                <h3 className="text-xl font-semibold text-white">Adresse</h3>
                <p className="text-gray-300">Boulevard Mohammed V, Oujda 60000</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-[#5E67B6]" />
              <div>
                <h3 className="text-xl font-semibold text-white">Téléphone</h3>
                <p className="text-gray-300">06 61 34 57 12</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-[#5E67B6]" />
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-300">contact@medsafcar.com</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6561.567216265592!2d-1.9237925522659827!3d34.68541049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd786561d2eac10d%3A0x559ab53773b933e7!2sMEDSAF%20CAR!5e0!3m2!1sfr!2sma!4v1731921070558!5m2!1sfr!2sma"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}