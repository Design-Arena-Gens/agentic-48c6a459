import { ArrowRight, Factory, Cog, TrendingUp, Shield, Zap, Users, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Nav */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">EazyLink</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition">Solutions</a>
              <a href="#avantages" className="text-gray-700 hover:text-blue-600 transition">Avantages</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600 transition">Industries</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Demander une démo
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Connectez votre <span className="text-blue-600">industrie</span> à l'avenir
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                EazyLink transforme vos opérations industrielles avec des solutions digitales intelligentes.
                Optimisez votre production, réduisez vos coûts et augmentez votre efficacité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  Planifier une démo <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#solutions" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition flex items-center justify-center">
                  Voir nos solutions
                </a>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Entreprises industrielles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Taux de satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">35%</div>
                  <div className="text-sm text-gray-600">Gain d'efficacité moyen</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-2xl">
                <Factory className="h-64 w-64 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Solutions Industrielles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des outils puissants conçus spécifiquement pour les besoins de l'industrie moderne
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Automatisation des processus",
                description: "Automatisez vos flux de travail industriels et réduisez les tâches manuelles répétitives jusqu'à 80%."
              },
              {
                icon: TrendingUp,
                title: "Analyse en temps réel",
                description: "Surveillez vos KPIs en direct avec des tableaux de bord intelligents et prenez des décisions éclairées."
              },
              {
                icon: Shield,
                title: "Maintenance prédictive",
                description: "Anticipez les pannes avec l'IA et réduisez vos temps d'arrêt de production jusqu'à 50%."
              },
              {
                icon: Users,
                title: "Gestion de la supply chain",
                description: "Optimisez votre chaîne d'approvisionnement avec une visibilité complète et une coordination efficace."
              },
              {
                icon: Zap,
                title: "IoT industriel",
                description: "Connectez vos machines et équipements pour une collecte de données automatisée et intelligente."
              },
              {
                icon: Factory,
                title: "Jumeau numérique",
                description: "Créez une réplique digitale de vos installations pour simuler et optimiser vos opérations."
              }
            ].map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow border border-gray-200">
                <solution.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir EazyLink ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme complète qui s'adapte à vos besoins industriels
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Implémentation rapide",
                description: "Déployez nos solutions en quelques semaines, pas en mois. Notre équipe vous accompagne à chaque étape."
              },
              {
                title: "ROI garanti",
                description: "Constatez un retour sur investissement dès les 6 premiers mois avec des gains mesurables."
              },
              {
                title: "Intégration complète",
                description: "Compatible avec vos systèmes existants (ERP, MES, SCADA) pour une transition en douceur."
              },
              {
                title: "Support 24/7",
                description: "Une équipe d'experts disponible en continu pour répondre à vos questions et résoudre vos problèmes."
              },
              {
                title: "Sécurité renforcée",
                description: "Conformité ISO 27001 et protection des données industrielles sensibles avec chiffrement de bout en bout."
              },
              {
                title: "Scalabilité",
                description: "Évoluez à votre rythme, d'un site pilote à un déploiement multi-sites international."
              }
            ].map((avantage, index) => (
              <div key={index} className="flex gap-4 bg-white rounded-xl p-6 shadow-md">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{avantage.title}</h3>
                  <p className="text-gray-600">{avantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Secteurs industriels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous accompagnons les leaders de l'industrie dans leur transformation digitale
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Automobile",
              "Aéronautique",
              "Pharmaceutique",
              "Agroalimentaire",
              "Chimie",
              "Électronique",
              "Métallurgie",
              "Énergie"
            ].map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 text-center font-semibold hover:scale-105 transition-transform cursor-pointer">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre industrie ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les centaines d'entreprises qui font confiance à EazyLink pour optimiser leurs opérations
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold">
            Demander une démonstration gratuite <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre équipe d'experts est à votre disposition pour discuter de vos besoins et vous proposer des solutions sur mesure.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@eazylink.fr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-gray-600">+33 1 23 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <div className="text-gray-600">123 Avenue de l'Industrie, 75001 Paris</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Entreprise *</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Nom de votre entreprise" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Prénom *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Nom *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email professionnel *</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Parlez-nous de votre projet..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">EazyLink</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire de confiance pour la transformation digitale industrielle.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Automatisation</a></li>
                <li><a href="#" className="hover:text-white transition">Analyse de données</a></li>
                <li><a href="#" className="hover:text-white transition">IoT industriel</a></li>
                <li><a href="#" className="hover:text-white transition">Maintenance prédictive</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">À propos</a></li>
                <li><a href="#" className="hover:text-white transition">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Presse</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Légal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition">CGV</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EazyLink. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
