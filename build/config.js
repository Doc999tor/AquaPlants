const config = {
  currency: '₪',
  phone: '+972549793976',
  data: {
    plants_categories: [
      {
        title: 'צמחי לאו-טק',
        sub_title: 'מהירי גדילה לאקווריומים פשוטים (לאו-טק) - Fast growing Low-tech plants',
        plants: [
          {
            id: 'myriophyllum_aquaticum',
            name: 'Myriophyllum mattogrossense - מיריופילום מטוגרוסנס',
            photo: ['myriophyllum_aquaticum_1'],
            description: 'צמח מהיר-גדילה מקסים, עם צבע ירוק-רענן, שגודל בתנאים טובים ממש מהר ויוצר סבך יפה\nמנה אחת - 3 גבעולים בוגרים',
            price: 35,
            discount_price: 35,
            qty_stock: 15 // 0 is not in stock
          },
          {
            id: 'cabomba_carolineana',
            name: 'Cabomba caroliniana - קבומבה קרוליניאנה',
            photo: ['cabomba_carolineana_2', 'cabomba_carolineana_3'],
            description: 'צמח גדול, מהיר-גדילה, עם עלים בצבע ירוק-כהה וסגלגל בצד התחתון\nמעולה ללאו-טק, לא מחייב דישון, CO2 או תאורה מעל 0.7 ווט לליטר. בתאורה חזקה יותר מקבל צבע אדום יפה\nמנה אחת - 3 גבעולים בוגרים',
            price: 45,
            discount_price: 45,
            qty_stock: 1 // 0 is not in stock
          },
          {
            id: 'vallisneria-spiralis',
            name: 'Vallisneria spiralis - וולסנריה מסולסלת',
            photo: ['vallisneria-spiralis'],
            description: 'צמח גבוה אם גדל בצפיפות, מהיר-גדילה, מתפשט מהר לצדדים ויוצר ג\'ונגל מאוד מרשים\nמעולה ללאו-טק, לא מחייב דישון, CO2 או תאורה חזקה\nמנה אחת - 3 גבעולים בוגרים',
            price: 35,
            discount_price: 15,
            qty_stock: 10 // 0 is not in stock
          },
          {
            id: 'marsilea',
            name: 'Marsilea minuta - מרסילאה מינוטה',
            photo: ['marsilea_1', 'marsilea_2'],
            description: 'מלכת הדשאים בלאו-טק ובכל אקווריום אחר! מתפשטת בצורה איטית אבל כובשת את שטח התחתית\nיוצרת דשא בצבע ירוק-כהה, שונה מכל המתחרים שלה. הדשא היחיד שמתפתח יפה גם בתנאי לאו-טק. שווה בכל אקווריום\nמנה אחת - שטיחון 5*5סמ\'',
            price: 50,
            discount_price: 45,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 'sagittaria_subulata',
            name: 'Sagittaria subulata - סגיטריה סובולטה',
            photo: ['sagittaria_subulata_1', 'sagittaria_subulata_2'],
            description: 'צמח דשא או לקידמה של אקווריומי לאו-טק\nמנה אחת - 3 גבעולים בוגרים',
            price: 35,
            discount_price: 35,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 'cryptocoryne_wendtii',
            name: 'Cryptocoryne wendtii - קריפטוקורין וונדטי',
            photo: ['cryptocoryne_wendtii_1', 'img_4388', '20160707_083314', 'cryptocoryne_wendtii_brown_2', 'cryptocoryne_wendtii_brown_1'],
            description: 'צמח אדום-חום קלאסי ללאו-טק, איטי-גדילה, מתפשט קצב איטי',
            price: 45,
            discount_price: 45,
            qty_stock: 3 // 0 is not in stock
          },
          {
            id: 'cryptocoryne_crispatula_var_balansae',
            name: 'Cryptocoryne crispatula var. balansae',
            photo: ['cryptocoryne_crispatula_var_balansae_1', 'cryptocoryne_crispatula_var_balansae_2', 'cryptocoryne_crispatula_var_balansae_3'],
            description: 'קריפטוקורין הכי יפה בעיניי, מלך של קריפטוקוריונים\nצמח גבוה עם עלים צרים מסולסלים בקצוות\nלאו-טק, מתאים למיכלים גדולים',
            price: 60,
            discount_price: 50,
            qty_stock: 10 // 0 is not in stock
          },
          {
            id: 'cryptocoryne_pontederiifolia',
            name: 'Cryptocoryne pontederifolia - קריפטוקורין פונטדריפוליה',
            photo: ['cryptocoryne_pontederiifolia_1', 'cryptocoryne_pontederiifolia_2', 'cryptocoryne_pontederiifolia_3'],
            description: 'צמח יפה מאוד, גדול עלים ורחבים (סקלרים אוהבים להטיל עליהם), אחרי תקופת ההסתגלות מתפשט מאוד מהר לעומת קריפטו אחרים',
            price: 50,
            discount_price: 45,
            qty_stock: 10 // 0 is not in stock
          },
          {
            id: 'rotala_rotundifolia',
            name: 'Rotala indica rotundifolia - רוטלה אינדיקה רוטנדיפוליה / רוטונדיפוליה',
            photo: ['rotala_rotundifolia_1', 'rotala_rotundifolia_2'],
            description: 'רוטלה אינדיקה זה צמח גבעול אהוב מאוד על ידי מתחילים, לא דורש תנאים מיוחדים, גודל יפה מאוד בכל אקווריום\nאבל על מנת להפיק ממנו מקסימום - בתנאי מיד-טק לא תזהו את הרוטלה, זה יהיה צמח אחר למרי: אדום, עם עלים חזקים, שיוצר סבך בפן האחורי\nמנה אחת - 3 גבעולים בוגרים',
            price: 35,
            discount_price: 35,
            qty_stock: 3 // 0 is not in stock
          },
        ]
      },
      {
        title: 'צמחי מיד-טק והיי-טק',
        sub_title: 'צמחים לקידמת האק\' או דשאים (רמת מתחילים - לאו-טק) - Grass and foreground plants for Low-tech aquariums',
        plants: [
          {
            id: 'echinodorus-vesuvius',
            name: 'Echinodorus \'vesuvius\' (Echinodorus angustifolia) - אכינודורוס וסוויוס',
            photo: ['echinodorus-vesuvius'],
            description: 'אחד הצמחים היפים והמיוחדים באקווריום צמחייה.\nשונה מכל שאר אכונודורוסים, הוא יוצר חוויה יוצאת דופן.\nאיטי-גדילה, צמח מיד-טק, אחרי 3-4 חודשים אתם תגלו סבך צפוף יפה ומרשים.',
            price: 50,
            discount_price: 45,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 'myriophyllum_heterophyllum',
            name: 'Myriophyllum heterophyllum - מיריופילום עם גבעול אדום',
            photo: ['myriophyllum_heterophyllum_1', 'myriophyllum_heterophyllum_2', ],
            description: 'מיריופילום יפה מאוד, עם גבעול אדום ועלים ירוקים\nמנה אחת - 3 גבעולים בוגרים',
            price: 45,
            discount_price: 35,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 'didiplis-diandra',
            name: 'Didiplis diandra - דידיפליס דיאנדרה',
            photo: ['didiplis-diandra-1', 'didiplis-diandra-2'],
            description: 'צמח מהיר-גדילה מקסים\nמתאים לעיצוב של אחורית וצדדים של האק\'\nדורש תאורה טובה\nמנה אחת - 3 גבעולים בוגרים',
            price: 45,
            discount_price: 35,
            qty_stock: 3 // 0 is not in stock
          },
          {
            id: 'echinodorus-latifolius',
            name: 'Echinodorus latifolius - אכינודורוס לטיפוליוס',
            photo: ['echinodorus-latifolius-1', 'echinodorus-latifolius-2'],
            description: 'צמח לקידמת האק\' (רמה מתקדמת - היי-טק)\nמנה אחת - 3 גבעולים בוגרים',
            price: 10,
            discount_price: 10,
            qty_stock: 30 // 0 is not in stock
          },
          {
            id: 'hygrophila_tiger',
            name: 'היגרופליה טייגר - Hygrophila sp. Tiger',
            photo: ['hygrophila_tiger_1', 'hygrophila_tiger_2', 'hygrophila_tiger_3'],
            description: 'צמח היי-טק נדיר ומיוחד - Hygrophila sp. Tiger רק למביני עניין מהיר-גדילה, מעולה לאחורנית\nמנה אחת - 3 גבעולים בוגרים',
            price: 50,
            discount_price: 35,
            qty_stock: 2 // 0 is not in stock
          },
        ]
      },
      {
        title: 'מוסים (טחבים) ושרכים',
        sub_title: 'מוסים ושרכים הם אבני בניין של כל אקווריום צמחייה או אקווה סקייפ. רובם לא דורשים תנאים מיוחדים, יכולים לגדול בכל צנצנצ מים נקיים. מתשמשים בהם הרבה כדי לעצב תוואי שטח, להסתיר ציוד, בתור מצע לשרימסים והטלת דגי חתול',
        plants: [
          {
            id: 'microsorum_pteropus_windelov',
            name: 'שרך תאילנדי (מיקרוסוריום פטרופוס) ווינדלוב - Microsorum pteropus Windelov, Windelov java fern',
            photo: ['microsorum_pteropus_windelov'],
            description: '',
            price: 35,
            discount_price: 35,
            qty_stock: 3 // 0 is not in stock
          },
          {
            id: 'microsorum_pteropus_narrow_leaf',
            name: 'שרך תאילנדי (מיקרוסוריום פטרופוס) - Microsorum pteropus \'Narrow Leaf\'',
            photo: ['microsorum_pteropus_narrow_leaf'],
            description: '',
            price: 35,
            discount_price: 35,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 'microsorum_pteropus_trident',
            name: 'שרך תאילנדי (מיקרוסוריום פטרופוס) טריידנט - Microsorum pteropus Trident, Trident java fern',
            photo: ['microsorum_pteropus_trident'],
            description: '',
            price: 35,
            discount_price: 35,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 'bolbitis_heudelotii',
            name: 'בולביטיס הודלוטי - Bolbitis heudelotii (African water fern, Congo fern)',
            photo: ['bolbitis_heudelotii_3', 'bolbitis_heudelotii_2', 'bolbitis_heudelotii_1', ],
            description: '',
            price: 50,
            discount_price: 50,
            qty_stock: 3 // 0 is not in stock
          },
        ]
      },
      {
        title: 'מוצרים משלימים',
        sub_title: 'אוכל לדגים, אביזרים לצמחים ו-CO2',
        plants: [
          {
            id: 'tetra-discus',
            name: 'אוכל טטרה דיסקוס',
            photo: ['tetra-discus'],
            description: 'Tetra Discus - אוכל איכותי, עם כמות גבוהה של חלבון, משאיר את המים נקיים, מתאים לאק\' צמחייה.\nמגיע בשקיות וקום.\nמנה אחת - 200מל\' 60ג\'',
            price: 25,
            discount_price: 25,
            qty_stock: 10 // 0 is not in stock
          },
        ]
      }
    ],
    min_total_price: 50,
    shipping_price: 50,
  },
  urls: {
    media: './assets/media/',
    plants_pic: './assets/plants/',
    pay_link: 'https://paypal.me/VictorSulema/{total_price}',
    order: '/form/contact_form.php',
  },
  translations: {
    site_title: 'Aqua Plants\nהמקום הכי טוב לקנות צמחי אקווריום',
    site_subtitle: 'אצלנו ניתן לקנות צמחים איכותיים לאקווריומים לכל רמות הקושי (Mid-tech, High-tech ו-Low-tech), זמן והשקעה\nניתן להזמין משלוחי צמחים לכל מקום בארץ',
    search_placeholder: 'חיפוש',
    bestsellers_label: 'הצמחים של Aqua Plants',
    in_stock_label: 'במלאי',
    out_of_stock_label: 'אזל במלאי',
    add_to_card_label: 'להוסיף לסל',
    added_to_card_label: 'התווסף לסל',
    free_label: 'מתנה',
    cart_title: 'סל',
    copy_rights: '© {year} כל הזכויות שמורות',
    plus_label: 'פלוס',
    minus_label: 'מינוס',
    remove_from_cart_label: 'להסיר מהסל',
    delivery_options: {
      title: 'Delivery Options',
      first_name_placeholder: 'שם פרטי',
      last_name_placeholder: 'שם משפחה',
      email_placeholder: 'אימייל',
      phone_placeholder: 'טלפון',
      address_placeholder: 'כתובת מלאה',
      city_placeholder: 'עיר',
      min_total_price: 'מחיר כולל: {price}',
      shipping_price: 'מחיר משלוח: {price}',
    },
    send_popup: {
      success: 'אנחנו קיבלנו את ההזמנה, ניצור איתכם קשר בהקדם האפשרי',
      error: 'משהו השתבת, צרו איתנו קשר בבקשה כדי להשלים את ההזמנה',
    }
  }
};
