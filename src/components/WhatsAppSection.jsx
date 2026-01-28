import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Users, Bell, HeartHandshake, Camera } from 'lucide-react';

const WhatsAppSection = () => {
  const { t } = useTranslation();

  // Replace this with your actual WhatsApp group invite link
  const whatsappGroupLink = "https://chat.whatsapp.com/I12jyE2guRs2LpdkobUSpH";

  // Replace with your WhatsApp number (include country code without + or spaces)
  const whatsappNumber = "919314600701"; // Example: 919876543210 for India
  const whatsappMessage = encodeURIComponent(t('whatsapp.default_message'));

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
            {t('whatsapp.title')}
          </h2>
          <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
            {t('whatsapp.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* QR Code Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-green-500 text-center">
            {/* QR Code Container */}
            <div className="bg-white p-6 rounded-2xl shadow-inner mb-6 inline-block border-4 border-green-100">
              {/* Placeholder QR Code - Replace with actual QR image */}
              <div className="w-64 h-64 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* You can replace this with an actual QR code image */}
                <img 
                  src="/images/whatsapp-qr.jpeg" 
                  alt="WhatsApp Group QR Code"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full absolute inset-0 items-center justify-center flex-col gap-4 hidden">
                  <MessageCircle className="w-20 h-20 text-green-600" />
                  <p className="text-sm text-gray-500 font-sans">{t('whatsapp.qr_placeholder')}</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t('whatsapp.qr_title')}
            </h3>
            <p className="text-gray-600 font-sans mb-4">
              {t('whatsapp.qr_description')}
            </p>
            
            <div className="bg-green-50 rounded-xl p-4 text-left">
              <p className="text-sm font-sans text-gray-700">
                <strong className="text-green-700">{t('whatsapp.step')} 1:</strong> {t('whatsapp.step1')}
              </p>
              <p className="text-sm font-sans text-gray-700 mt-2">
                <strong className="text-green-700">{t('whatsapp.step')} 2:</strong> {t('whatsapp.step2')}
              </p>
              <p className="text-sm font-sans text-gray-700 mt-2">
                <strong className="text-green-700">{t('whatsapp.step')} 3:</strong> {t('whatsapp.step3')}
              </p>
            </div>
          </div>

          {/* Direct Link Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-emerald-500">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-sans font-semibold">
              <Bell className="w-5 h-5" />
              {t('whatsapp.instant_updates')}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('whatsapp.benefits_title')}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bell className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t('whatsapp.benefit1_title')}</p>
                  <p className="text-sm text-gray-600 font-sans">{t('whatsapp.benefit1_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <HeartHandshake className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t('whatsapp.benefit2_title')}</p>
                  <p className="text-sm text-gray-600 font-sans">{t('whatsapp.benefit2_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t('whatsapp.benefit3_title')}</p>
                  <p className="text-sm text-gray-600 font-sans">{t('whatsapp.benefit3_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Camera className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t('whatsapp.benefit4_title')}</p>
                  <p className="text-sm text-gray-600 font-sans">{t('whatsapp.benefit4_desc')}</p>
                </div>
              </div>

            </div>

            {/* Join Group Button */}
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 font-sans font-bold text-center mb-4"
            >
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {t('whatsapp.join_group_btn')}
              </div>
            </a>

            {/* Direct Message Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-green-500 text-green-700 px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 font-sans font-bold text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {t('whatsapp.message_us_btn')}
              </div>
            </a>

            <p className="text-xs text-gray-500 text-center mt-4 font-sans">
              {t('whatsapp.privacy_note')}
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white text-center">
          <p className="font-sans text-lg">
            <strong>{t('whatsapp.note')}:</strong> {t('whatsapp.note_text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;