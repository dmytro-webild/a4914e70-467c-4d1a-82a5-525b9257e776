"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Calendar, Crown, HelpCircle, Leaf, MessageSquare, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="floatingGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Specials",
          id: "#specials",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Delicious Delights"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="Savor the Moment, Taste the Difference"
      description="Experience culinary excellence with our exquisite dishes, crafted with passion and the freshest local ingredients. Your unforgettable dining journey starts here."
      testimonials={[
        {
          name: "Alice Johnson",
          handle: "@foodiegirl",
          testimonial: "An incredible dining experience! Every dish was a masterpiece, beautifully presented and bursting with flavor. The ambiance was perfect for a special evening.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",
          imageAlt: "Alice Johnson avatar",
        },
        {
          name: "David Chen",
          handle: "@gourmetguide",
          testimonial: "Truly exceptional service and food. The staff went above and beyond, and the chef's specials were simply divine. Can't wait to come back!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-red-tie-shirt-looking-happy-cheerful-smiling-broadly-showing-v-sign_141793-111833.jpg",
          imageAlt: "David Chen avatar",
        },
        {
          name: "Emily White",
          handle: "@eatwell",
          testimonial: "My new favorite restaurant! The flavors are so unique and fresh. Highly recommend their pasta dishes – a real treat!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-pretty-woman-smiling-happy-sincere-positive-emotion-isolated-white-background-checkered-shirt-hipster-style-modern-youth_285396-2839.jpg",
          imageAlt: "Emily White avatar",
        },
        {
          name: "Michael Brown",
          handle: "@chefreviews",
          testimonial: "As a chef myself, I'm genuinely impressed. The precision, ingredient quality, and creativity are outstanding. A must-visit!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-senior-woman-wearing-apron-uniform-red-isolated-background-doing-happy-thumbs-up-gesture-with-hand-approving-expression-looking-camera-showing-success_839833-32756.jpg",
          imageAlt: "Michael Brown avatar",
        },
        {
          name: "Sarah Davis",
          handle: "@foodlover",
          testimonial: "The atmosphere is cozy and elegant, and the food is out of this world. Every bite was pure bliss. Perfect for any occasion!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people_273609-1727.jpg",
          imageAlt: "Sarah Davis avatar",
        },
      ]}
      testimonialRotationInterval={5000}
      tag="Taste Perfection"
      tagIcon={Sparkles}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "View Our Menu",
          href: "#menu",
        },
        {
          text: "Make a Reservation",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-stylish-bearded-man-with-hairstyle-elegant-retro-gray-suit-bow-tie-posing-studio-isolated-gray-background_613910-20001.jpg",
          alt: "Alice Johnson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3632.jpg",
          alt: "David Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/celebration-party-lifestyle-concept-cute-silly-blond-girl-worry-as-trying-think-what-she-wants-t_1258-116171.jpg",
          alt: "Emily White",
        },
        {
          src: "http://img.b2bpic.net/free-photo/joyful-young-afro-american-male-barber-wearing-uniform-doing-yes-gesture-with-closed-eyes-isolated-green-wall_141793-112683.jpg",
          alt: "Michael Brown",
        },
        {
          src: "http://img.b2bpic.net/free-photo/table-decorated-christmas_1162-202.jpg",
          alt: "Sarah Davis",
        },
      ]}
      avatarText="Loved by our guests"
      imageSrc="http://img.b2bpic.net/free-photo/table-decorated-christmas_1162-202.jpg"
      imageAlt="Elegant restaurant interior with soft lighting"
      showDimOverlay={true}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Passion for Culinary Craftsmanship",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/man-chef-frying-meat-pan-fire_1303-32153.jpg"
      imageAlt="Chef preparing a gourmet meal in a professional kitchen"
    />
  </div>

  <div id="specials" data-section="specials">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      features={[
        {
          title: "Signature Steak Frites",
          description: "Our perfectly seared prime steak, served with crispy golden frites and a rich house-made peppercorn sauce. A timeless classic.",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-beef-steak-with-asparagus-roasted-vegetables_84443-94484.jpg",
          imageAlt: "Signature Steak Frites",
          titleImageSrc: "http://img.b2bpic.net/free-photo/fried-meat-with-eggplants-tomatoes-served-with-glass-wine_141793-745.jpg",
          buttonText: "Discover More",
        },
        {
          title: "Seafood Linguine",
          description: "Fresh, locally sourced seafood tossed with al dente linguine in a light, aromatic white wine and garlic sauce. A taste of the ocean.",
          imageSrc: "http://img.b2bpic.net/free-photo/creamy-fusilli-pasta-with-fried-shrimps-fresh-herbs_140725-10790.jpg",
          imageAlt: "Seafood Linguine",
          titleImageSrc: "http://img.b2bpic.net/free-photo/fettucine-white-cream-sauce-with-shrimp-mushroom_74190-5969.jpg",
          buttonText: "Discover More",
        },
        {
          title: "Decadent Chocolate Lava Cake",
          description: "A warm, gooey chocolate lava cake with a molten center, served with a scoop of homemade vanilla bean ice cream and fresh berries.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-creamy-cake-with-chocolate-raisins-light-dark-floor_140725-136347.jpg",
          imageAlt: "Decadent Chocolate Lava Cake",
          titleImageSrc: "http://img.b2bpic.net/free-photo/front-view-dessert-cookies-with-chocolate-icing-plate_141793-4683.jpg",
          buttonText: "Discover More",
        },
      ]}
      title="Our Culinary Specialties"
      description="Explore our chef's signature dishes, crafted with the finest ingredients and innovative techniques to delight your palate."
      tag="Chef's Picks"
      tagIcon={Star}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "View All Specials",
          href: "#menu",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "pizza-margherita",
          brand: "Appetizers",
          name: "Margherita Pizza",
          price: "$18",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/pizza-with-peppers-olives-cheese_501050-832.jpg",
          imageAlt: "Classic Margherita Pizza",
        },
        {
          id: "sushi-platter",
          brand: "Main Courses",
          name: "Premium Sushi Platter",
          price: "$35",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-food_23-2148142556.jpg",
          imageAlt: "Assorted Sushi Platter",
        },
        {
          id: "truffle-risotto",
          brand: "Main Courses",
          name: "Wild Mushroom Truffle Risotto",
          price: "$28",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-sweet-cinnamon-rolls-with-white-cream-plate_181624-45644.jpg",
          imageAlt: "Creamy Truffle Risotto",
        },
        {
          id: "grilled-salmon",
          brand: "Main Courses",
          name: "Grilled Atlantic Salmon",
          price: "$32",
          rating: 4,
          reviewCount: "110",
          imageSrc: "http://img.b2bpic.net/free-photo/mackerel-fish-steak_1339-5044.jpg",
          imageAlt: "Grilled Salmon with Asparagus",
        },
        {
          id: "artisan-bread",
          brand: "Appetizers",
          name: "Artisan Bread Basket",
          price: "$9",
          rating: 5,
          reviewCount: "70",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-egg-inside-toast-bread-slice-wooden-plate-high-quality-photo_114579-20329.jpg",
          imageAlt: "Artisan Bread with Dips",
        },
        {
          id: "garden-salad",
          brand: "Salads",
          name: "Seasonal Garden Salad",
          price: "$14",
          rating: 4,
          reviewCount: "60",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-table_140725-10063.jpg",
          imageAlt: "Fresh Seasonal Garden Salad",
        },
      ]}
      title="Our Exquisite Menu"
      description="From appetizers to desserts, each dish is a symphony of flavors, crafted to perfection. Discover your next favorite meal."
      tag="Fresh & Local"
      tagIcon={Leaf}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "View Full Menu",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      uniformGridCustomHeightClasses="min-h-95 2xl:min-h-105"
      plans={[
        {
          id: "basic-package",
          badge: "Standard",
          badgeIcon: Sparkles,
          price: "$75/guest",
          subtitle: "Perfect for intimate gatherings",
          buttons: [
            {
              text: "Select Basic",
            },
          ],
          features: [
            "3-Course Meal",
            "Non-alcoholic Beverages",
            "Standard Table Setup",
            "Dedicated Server",
            "Minimum 10 Guests",
          ],
        },
        {
          id: "premium-package",
          badge: "Popular Choice",
          badgeIcon: Award,
          price: "$120/guest",
          subtitle: "Ideal for special celebrations",
          buttons: [
            {
              text: "Select Premium",
            },
          ],
          features: [
            "5-Course Gourmet Meal",
            "Premium Wine Pairing",
            "Elegant Floral Decor",
            "Private Dining Area",
            "Custom Cake Option",
          ],
        },
        {
          id: "luxury-package",
          badge: "Ultimate Experience",
          badgeIcon: Crown,
          price: "$180/guest",
          subtitle: "For an unforgettable event",
          buttons: [
            {
              text: "Select Luxury",
            },
          ],
          features: [
            "7-Course Michelin-Inspired Menu",
            "Sommelier Wine Service",
            "Live Music Entertainment",
            "Personal Event Coordinator",
            "Exclusive Venue Access",
          ],
        },
      ]}
      title="Our Event & Catering Packages"
      description="Host your next event with us. We offer customizable packages for every occasion, ensuring a memorable experience for you and your guests."
      tag="Host With Us"
      tagIcon={Calendar}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Request a Quote",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      carouselMode="buttons"
      uniformGridCustomHeightClasses="min-h-95 2xl:min-h-105"
      testimonials={[
        {
          id: "1",
          name: "Sophia Rodriguez",
          role: "Local Food Critic",
          company: "City Eats Magazine",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-stylish-denim-jacket-coffee-shop_273609-4460.jpg",
          imageAlt: "Sophia Rodriguez",
        },
        {
          id: "2",
          name: "James Thompson",
          role: "Regular Customer",
          company: "Food Enthusiast",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-man-spectacles_1303-14468.jpg",
          imageAlt: "James Thompson",
        },
        {
          id: "3",
          name: "Olivia Martinez",
          role: "Event Planner",
          company: "Celebration Events",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-girl-smiling-happy-standing-city_839833-28609.jpg",
          imageAlt: "Olivia Martinez",
        },
        {
          id: "4",
          name: "William Garcia",
          role: "Tourist",
          company: "Travel Blogger",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/chef-with-uniform-utensil-kitchen_23-2148145546.jpg",
          imageAlt: "William Garcia",
        },
        {
          id: "5",
          name: "Ava Lee",
          role: "Food Blogger",
          company: "Daily Bites",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-man-talking-phone_23-2148230757.jpg",
          imageAlt: "Ava Lee",
        },
        {
          id: "6",
          name: "Noah Kim",
          role: "Foodie",
          company: "Gastronomy Club",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-eating-restaurant_23-2148006700.jpg",
          imageAlt: "Noah Kim",
        },
      ]}
      title="What Our Guests Say"
      description="Don't just take our word for it. Our patrons consistently share their delightful dining experiences and praise our exceptional service and cuisine."
      tag="Rave Reviews"
      tagIcon={MessageSquare}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Read More Reviews",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "Do I need a reservation?",
          content: "Reservations are highly recommended, especially on weekends and for dinner service, to ensure you get a table. You can make a reservation through our website or by calling us directly.",
        },
        {
          id: "faq-2",
          title: "Do you offer vegetarian or vegan options?",
          content: "Yes, we have a selection of delicious vegetarian and vegan dishes, clearly marked on our menu. Please inform your server about any dietary restrictions or preferences, and our chefs will do their best to accommodate.",
        },
        {
          id: "faq-3",
          title: "What are your operating hours?",
          content: "We are open for lunch from 11:30 AM to 2:30 PM, and for dinner from 5:00 PM to 10:00 PM, Tuesday through Sunday. We are closed on Mondays. Holiday hours may vary, please check our social media for updates.",
        },
        {
          id: "faq-4",
          title: "Can you accommodate large groups or private events?",
          content: "Absolutely! We have private dining areas suitable for groups of various sizes and offer special catering packages for events. Please contact our events coordinator for more information and to discuss your specific needs.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-waiter-holding-digital-tablet-while-taking-order-from-couple-bar_637285-2427.jpg"
      imageAlt="Restaurant host welcoming guests"
      mediaAnimation="slide-up"
      mediaPosition="left"
      title="Frequently Asked Questions"
      description="Find quick answers to common inquiries about reservations, menu options, operating hours, and private dining at our restaurant."
      tag="Your Questions, Answered"
      tagIcon={HelpCircle}
      tagAnimation="slide-up"
      buttonAnimation="none"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to experience a delightful meal? Book your table or get in touch for any inquiries. We look forward to welcoming you!"
      buttons={[
        {
          text: "Make a Reservation",
          href: "#",
        },
        {
          text: "Email Us",
          href: "mailto:info@deliciousdelights.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=61nalt"
      logoAlt="Delicious Delights Logo"
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Team",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Full Menu",
              href: "#menu",
            },
            {
              label: "Specials",
              href: "#specials",
            },
            {
              label: "Gift Cards",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Reservations",
              href: "#contact",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Sitemap",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Delicious Delights"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
