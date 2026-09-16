const copy = {
  en: {
    navStay: 'The stay', navGallery: 'Gallery', navLocation: 'Location', navContact: 'Contact',
    eyebrow: 'Boutique city stay · Thessaloniki', heroTitle: 'Stay in the heart of the city.',
    heroCopy: 'UrbanStay brings bold design, calm comfort and a truly central address together at 68 Agias Sofias.',
    viewPhotos: 'View the space', contactUs: 'Contact us', bookBooking: 'Book on Booking.com', addressLabel: 'Address',
    theStay: 'The stay', introTitle: 'A playful urban retreat with a strong point of view.',
    introP1: 'A monochrome mural gives UrbanStay its unmistakable identity, while warm lighting, clean finishes and carefully chosen details keep the atmosphere relaxed and welcoming.',
    introP2: 'The apartment includes a comfortable sleeping area, dining/work space, TV, refrigerator, open wardrobe and a modern private bathroom with walk-in shower.',
    agiasSofias: 'Agias Sofias', boutiqueSpace: 'Boutique space', cityEnergy: 'City energy',
    signatureKicker: 'Urban character', signatureTitle: 'Not another anonymous rental.',
    signatureCopy: 'The illustrated wall is the visual signature of the apartment — graphic, memorable and made for guests who want a place with personality.',
    galleryKicker: 'See the space', galleryTitle: 'Inside UrbanStay', galleryCopy: 'Tap any photo to view it full screen.',
    locationKicker: 'Right in Thessaloniki', locationTitle: 'A central base for the city.',
    locationCopy: 'UrbanStay is at 68 Agias Sofias, placing guests in the city center with Thessaloniki’s streets, food, culture and nightlife around them.',
    openMaps: 'Open in Google Maps ↗', contactKicker: 'Plan your stay', contactTitle: 'Questions before you book?',
    contactCopy: 'Get in touch directly with UrbanStay.', bookingLabel: 'Booking', bookingCta: 'Book on Booking.com', phone: 'Phone'
  },
  el: {
    navStay: 'Το κατάλυμα', navGallery: 'Φωτογραφίες', navLocation: 'Τοποθεσία', navContact: 'Επικοινωνία',
    eyebrow: 'Boutique διαμονή · Θεσσαλονίκη', heroTitle: 'Μείνε στην καρδιά της πόλης.',
    heroCopy: 'Το UrbanStay συνδυάζει ιδιαίτερο design, άνεση και μια πραγματικά κεντρική διεύθυνση, στην Αγίας Σοφίας 68.',
    viewPhotos: 'Δες τον χώρο', contactUs: 'Επικοινωνία', bookBooking: 'Κράτηση στο Booking.com', addressLabel: 'Διεύθυνση',
    theStay: 'Το κατάλυμα', introTitle: 'Ένα urban καταφύγιο με ξεχωριστή ταυτότητα.',
    introP1: 'Η ασπρόμαυρη τοιχογραφία δίνει στο UrbanStay τον ιδιαίτερο χαρακτήρα του, ενώ ο ζεστός φωτισμός, οι καθαρές γραμμές και οι προσεγμένες λεπτομέρειες δημιουργούν μια άνετη και φιλόξενη ατμόσφαιρα.',
    introP2: 'Το διαμέρισμα διαθέτει άνετο χώρο ύπνου, τραπεζαρία/χώρο εργασίας, τηλεόραση, ψυγείο, ανοιχτή κρεμάστρα και μοντέρνο ιδιωτικό μπάνιο με walk-in ντους.',
    agiasSofias: 'Αγίας Σοφίας', boutiqueSpace: 'Boutique χώρος', cityEnergy: 'Ρυθμός πόλης',
    signatureKicker: 'Urban χαρακτήρας', signatureTitle: 'Όχι άλλο ένα απρόσωπο κατάλυμα.',
    signatureCopy: 'Η εικονογραφημένη τοιχογραφία είναι η οπτική υπογραφή του διαμερίσματος — έντονη, αξέχαστη και ιδανική για επισκέπτες που θέλουν έναν χώρο με προσωπικότητα.',
    galleryKicker: 'Δες τον χώρο', galleryTitle: 'Μέσα στο UrbanStay', galleryCopy: 'Πάτησε σε οποιαδήποτε φωτογραφία για προβολή σε πλήρη οθόνη.',
    locationKicker: 'Στο κέντρο της Θεσσαλονίκης', locationTitle: 'Ιδανική βάση για την πόλη.',
    locationCopy: 'Το UrbanStay βρίσκεται στην Αγίας Σοφίας 68, σε κεντρικό σημείο της Θεσσαλονίκης, με την πόλη, το φαγητό, τον πολιτισμό και τη νυχτερινή ζωή γύρω σου.',
    openMaps: 'Άνοιγμα στους Χάρτες Google ↗', contactKicker: 'Οργάνωσε τη διαμονή σου', contactTitle: 'Έχεις απορίες πριν την κράτηση;',
    contactCopy: 'Επικοινώνησε απευθείας με το UrbanStay.', bookingLabel: 'Κράτηση', bookingCta: 'Κράτηση μέσω Booking.com', phone: 'Τηλέφωνο'
  }
};

const langButton = document.querySelector('.lang-toggle');
let lang = 'en';
langButton.addEventListener('click', () => {
  lang = lang === 'en' ? 'el' : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (copy[lang][key]) el.textContent = copy[lang][key];
  });
  langButton.textContent = lang === 'en' ? 'EL' : 'EN';
});

const items = [...document.querySelectorAll('.gallery-item')];
const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
let current = 0;

function openPhoto(index) {
  current = (index + items.length) % items.length;
  dialogImage.src = items[current].dataset.full;
  if (!dialog.open) dialog.showModal();
}

items.forEach((item, index) => item.addEventListener('click', () => openPhoto(index)));
dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.querySelector('.lightbox-prev').addEventListener('click', () => openPhoto(current - 1));
dialog.querySelector('.lightbox-next').addEventListener('click', () => openPhoto(current + 1));
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
window.addEventListener('keydown', (event) => {
  if (!dialog.open) return;
  if (event.key === 'ArrowLeft') openPhoto(current - 1);
  if (event.key === 'ArrowRight') openPhoto(current + 1);
});
