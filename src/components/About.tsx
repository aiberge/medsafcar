import { Shield, Star, Clock, Award, Wrench, CreditCard } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#5E67B6] mb-12">
          About MEDSAF CAR
        </h2>

        {/* Rest of the component remains the same, just updating the color from #C55238 to #A7984E */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-[#A7984E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#432F25] mb-2">Sécurité Garantie</h3>
            <p className="text-gray-600">
              Tous nos véhicules sont régulièrement entretenus et assurés pour votre tranquillité d'esprit.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-[#A7984E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#432F25] mb-2">Service Premium</h3>
            <p className="text-gray-600">
              Une flotte de véhicules haut de gamme et un service client personnalisé pour une expérience exceptionnelle.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-[#A7984E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#432F25] mb-2">Disponibilité 24/7</h3>
            <p className="text-gray-600">
              Notre équipe est à votre disposition à tout moment pour répondre à vos besoins.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-[#A7984E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#432F25] mb-2">Qualité Certifiée</h3>
            <p className="text-gray-600">
              Des véhicules récents et parfaitement entretenus pour votre confort et votre sécurité.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Wrench className="w-12 h-12 text-[#A7984E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#432F25] mb-2">Maintenance Régulière</h3>
            <p className="text-gray-600">
              Chaque véhicule est vérifié et entretenu selon un programme strict de maintenance.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CreditCard className="w-12 h-12 text-[#A7984E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#432F25] mb-2">Prix Compétitifs</h3>
            <p className="text-gray-600">
              Des tarifs transparents et attractifs pour tous les budgets.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Depuis notre création, Fayolle Car s'engage à offrir une expérience de location automobile
            exceptionnelle. Notre passion pour l'excellence et notre engagement envers la satisfaction
            client font de nous le choix privilégié pour vos besoins en location de voitures premium.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#432F25] mb-6">Notre Engagement</h3>
            <p className="text-gray-600 mb-6">
              Chez Fayolle Car, nous nous engageons à fournir un service de qualité supérieure à tous nos clients.
              Notre objectif est de rendre votre expérience de location aussi simple et agréable que possible.
            </p>
            <ul className="text-left space-y-3 text-gray-600">
              <li>✓ Véhicules propres et désinfectés avant chaque location</li>
              <li>✓ Assistance routière disponible 24h/24 et 7j/7</li>
              <li>✓ Processus de location simple et rapide</li>
              <li>✓ Options de paiement flexibles</li>
              <li>✓ Service client réactif et professionnel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}