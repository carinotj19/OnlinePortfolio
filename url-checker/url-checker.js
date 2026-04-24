/**
 * url-checker.js  —  Semi-automatic website checker with status dashboard
 *
 * Opens a control panel tab first, then opens URLs 5 at a time.
 * Tag each URL with a status (OEM Image, In-Progress, Done, etc.)
 * directly from the dashboard OR from an overlay on each tab.
 * Export results as CSV when done.
 *
 * Usage:
 *   node url-checker.js
 *
 * Requirements:
 *   npm install playwright
 *   npx playwright install chromium
 */

const { chromium } = require("playwright");
const http = require("http");
const fs = require("fs");
const path = require("path");

// ─────────────────────────────────────────────
// PUT YOUR URLs HERE
// ─────────────────────────────────────────────
const URLS = [
  "https://www.bmwride.com/",
  "https://www.bmwride.com/1250gs-offer/",
  "https://www.bmwride.com/1250-gs-offer/",
  "https://www.bmwride.com/2020-bmw-f-850-gs/",
  "https://www.bmwride.com/2020-bmw-f-850-gs-adventure/",
  "https://www.bmwride.com/2020-bmw-f-900-r/",
  "https://www.bmwride.com/2020-bmw-r-ninet/",
  "https://www.bmwride.com/2020-bmw-r-ninet-pure/",
  "https://www.bmwride.com/2020-bmw-r-ninet-scrambler/",
  "https://www.bmwride.com/2020-bmw-r-ninet-scrambler-inventory-for-sale/",
  "https://www.bmwride.com/2020-bmw-s-1000-rr/",
  "https://www.bmwride.com/2021-bmw-f-750-gs/",
  "https://www.bmwride.com/2021-bmw-f-750-gs-edition-40-years-gs/",
  "https://www.bmwride.com/2021-bmw-f-850-gs/",
  "https://www.bmwride.com/2021-bmw-f-850-gs-adventure/",
  "https://www.bmwride.com/2021-bmw-f-850-gs-edition-40-years-gs/",
  "https://www.bmwride.com/2021-bmw-f-900r/",
  "https://www.bmwride.com/2021-bmw-f-900-xr/",
  "https://www.bmwride.com/2021-bmw-g-310-gs/",
  "https://www.bmwride.com/2021-bmw-g-310-gs-edition-40-years-gs/",
  "https://www.bmwride.com/2021-bmw-g-310-gs-edition-40-years-gs-2/",
  "https://www.bmwride.com/2021-bmw-m-1000-rr/",
  "https://www.bmwride.com/2021-bmw-r-1250-gs/",
  "https://www.bmwride.com/2021-bmw-r-1250-gs-40-years-gs-edition/",
  "https://www.bmwride.com/2021-bmw-r-1250-gs-adventure/",
  "https://www.bmwride.com/2021-bmw-r-1250-rt/",
  "https://www.bmwride.com/2021-bmw-r-18-classic/",
  "https://www.bmwride.com/2021-bmw-r-ninet/",
  "https://www.bmwride.com/2021-bmw-r-ninet-pure/",
  "https://www.bmwride.com/2021-bmw-r-ninet-scrambler-san-jose-ca/",
  "https://www.bmwride.com/2021-bmw-r-nine-t-urban-gs-edition-40-years-gs/",
  "https://www.bmwride.com/2021-bmw-s-1000-r/",
  "https://www.bmwride.com/2022-bmw-c-400-gt-northern-california/",
  "https://www.bmwride.com/2022-bmw-ce-04-northern-california/",
  "https://www.bmwride.com/2022-bmw-f-900-xr-northern-california/",
  "https://www.bmwride.com/2022-bmw-g-310-gs-northern-california/",
  "https://www.bmwride.com/2022-bmw-k-1600-gtl-northern-california/",
  "https://www.bmwride.com/2022-bmw-k-1600-gtl-northern-california-ca/",
  "https://www.bmwride.com/2022-bmw-r-1250-gs-adventure-edition-40-years-gs-northern-california/",
  "https://www.bmwride.com/2022-bmw-r-1250-gs-edition-40-years-gs-northern-california/",
  "https://www.bmwride.com/2022-bmw-r-18/",
  "https://www.bmwride.com/2022-bmw-r-18-b-northern-california/",
  "https://www.bmwride.com/2022-bmw-r-18-classic-northern-california/",
  "https://www.bmwride.com/2022-bmw-r-18-northern-california/",
  "https://www.bmwride.com/2022-bmw-r-18-transcontinental-northern-california/",
  "https://www.bmwride.com/2022-bmw-s-1000-xr-northern-california/",
  "https://www.bmwride.com/2023-bmw-f-750-gs-northern-california/",
  "https://www.bmwride.com/2023-bmw-f-850-gs-adventure-northern-california/",
  "https://www.bmwride.com/2023-bmw-f-850-gs-northern-california/",
  "https://www.bmwride.com/2023-bmw-f-900-xr-northern-california/",
  "https://www.bmwride.com/2023-bmw-g-310-gs-northern-california/",
  "https://www.bmwride.com/2023-bmw-r-1250-gs-adventure/",
  "https://www.bmwride.com/2023-bmw-r-1250-gs-northern-california/",
  "https://www.bmwride.com/2023-bmw-r-18-2/",
  "https://www.bmwride.com/2023-bmw-r-18-classic-northern-california/",
  "https://www.bmwride.com/2023-bmw-r-18-northern-california/",
  "https://www.bmwride.com/2023-bmw-s-1000-xr-northern-california/",
  "https://www.bmwride.com/2023-f-850-gs-easyride-offer/",
  "https://www.bmwride.com/2023-f-900-r-apr-financing/",
  "https://www.bmwride.com/2023-r-1250-rt-apr-financing/",
  "https://www.bmwride.com/2023-r18-b-r-18tc-apr/",
  "https://www.bmwride.com/2024-bmw-r-1250-gs-adventure-for-sale-northern-california/",
  "https://www.bmwride.com/2024-bmw-r-1250-rt-for-sale-northern-california/",
  "https://www.bmwride.com/2024-bmw-r-1300-gs-for-sale-northern-california/",
  "https://www.bmwride.com/2024-bmw-r-18-roctane-dealerships-in-northern-california-find-your-dream-motorcycle/",
  "https://www.bmwride.com/2024-bmw-r-18-roctane-exterior-features/",
  "https://www.bmwride.com/2024-bmw-r-18-roctane-safety-features-northern-california/",
  "https://www.bmwride.com/2024-bmw-s-1000-rr-for-sale-northern-california/",
  "https://www.bmwride.com/2024-g-310-gs-easyride-offer/",
  "https://www.bmwride.com/2024-r-1250-gs-adventure-easyride-offer/",
  "https://www.bmwride.com/2025-bmw-f-800-gs-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-f-800-gs-northern-california/",
  "https://www.bmwride.com/2025-bmw-f-900-gs-adventure-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-f-900-gs-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-f-900-r-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-g-310-gs-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-k-1600-grand-america-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-m-1000-r-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-m-1000-rr-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-r-12-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-r-12-s-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-r-13000-gs-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-r-1300-gs-adventure-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-r-1300-gs-adventure-northern-california/",
  "https://www.bmwride.com/2025-bmw-r-18-transcontinental-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-s-1000-rr-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-s-1000-xr-for-sale-northern-california/",
  "https://www.bmwride.com/2026-bmw-ce-02-northern-california/",
  "https://www.bmwride.com/2026-bmw-f-800-gs-northern-california/",
  "https://www.bmwride.com/2026-bmw-f-900-gs-northern-california/",
  "https://www.bmwride.com/2026-bmw-f-900-r-northern-california/",
  "https://www.bmwride.com/2026-bmw-m-1000-rr-northern-california/",
  "https://www.bmwride.com/2026-bmw-m-1000-xr-northern-california/",
  "https://www.bmwride.com/2026-bmw-motorcycles-coastal-riding-san-francisco/",
  "https://www.bmwride.com/2026-bmw-r-1300-r-northern-california/",
  "https://www.bmwride.com/2026-bmw-s-1000-r-northern-california/",
  "https://www.bmwride.com/2027-bmw-f-450-gs-northern-california/",
  "https://www.bmwride.com/3-9-apr-financing-for-2023-r-1250-gs/",
  "https://www.bmwride.com/3-9-apr-financing-on-select-2023-models/",
  "https://www.bmwride.com/3asy-ride-financing/",
  "https://www.bmwride.com/3-year-warranty-and-roadside/",
  "https://www.bmwride.com/apr-financing-2024-models/",
  "https://www.bmwride.com/are-bmw-motorcycles-good/",
  "https://www.bmwride.com/beginners-guide-to-motorcycle-riding/",
  "https://www.bmwride.com/bmw-apparel/",
  "https://www.bmwride.com/bmw-bike-daily-commute-adventure/",
  "https://www.bmwride.com/bmw-cards/",
  "https://www.bmwride.com/bmw-group-touring-california-guide/",
  "https://www.bmwride.com/bmw-motorcycle-camping-tips-pack-light-ride-far/",
  "https://www.bmwride.com/bmw-motorcycle-financing-options-northern-california/",
  "https://www.bmwride.com/bmw-motorcycles-and-prices/",
  "https://www.bmwride.com/bmw-motorcycles-in-northern-california-a-comprehensive-guide-to-models-and-features/",
  "https://www.bmwride.com/bmw-motorcycles-norcal-events/",
  "https://www.bmwride.com/bmw-motorcycles-prices/",
  "https://www.bmwride.com/bmw-motorrad/",
  "https://www.bmwride.com/bmw-motorrad-fresno-autumn-motorcycle-rides/",
  "https://www.bmwride.com/bmw-motorrad-modesto-discover-thrills/",
  "https://www.bmwride.com/bmw-motorrad-riding-etiquette-road-safety-and-communication/",
  "https://www.bmwride.com/bmw-r-18-loyalty-offer/",
  "https://www.bmwride.com/browse-inventory-by-dealer/",
  "https://www.bmwride.com/c400-x/",
  "https://www.bmwride.com/c-650-gt/",
  "https://www.bmwride.com/c-650-sport/",
  "https://www.bmwride.com/ce-02-offer/",
  "https://www.bmwride.com/c-evolution/",
  "https://www.bmwride.com/compare-the-bmw-f-900-gs-and-the-bmw-f-900-gs-adventure-in-northern-california/",
  "https://www.bmwride.com/connectivity/",
  "https://www.bmwride.com/credit-offer/",
  "https://www.bmwride.com/customer-cash-2024-models/",
  "https://www.bmwride.com/dagevent/",
  "https://www.bmwride.com/discover-autumn-landscapes-in-northern-california/",
  "https://www.bmwride.com/discover-the-bmw-heritage-motorcycles-in-northern-california/",
  "https://www.bmwride.com/discover-the-bmw-m-motorcycles-in-northern-california/",
  "https://www.bmwride.com/discover-the-performance-of-the-bmw-k-1600-gt-in-northern-california/",
  "https://www.bmwride.com/does-bmw-make-motorcycles/",
  "https://www.bmwride.com/experience-the-thrill-of-the-open-road-with-bmw-motorcycles/",
  "https://www.bmwride.com/explore-the-thrill-of-riding-welcome-to-the-world-of-bmw-adventure-motorcycles-in-northern-california/",
  "https://www.bmwride.com/explore-the-top-features-of-the-bmw-m-1000-rr-in-northern-california/",
  "https://www.bmwride.com/f700gs/",
  "https://www.bmwride.com/f750gs/",
  "https://www.bmwride.com/f800gs/",
  "https://www.bmwride.com/f-800-gs-cash-finance-offer/",
  "https://www.bmwride.com/f-800-gs-offer/",
  "https://www.bmwride.com/f800gt/",
  "https://www.bmwride.com/f800r/",
  "https://www.bmwride.com/f850gs/",
  "https://www.bmwride.com/f-850-gs-adventure/",
  "https://www.bmwride.com/f-900-gs-cash-finance-offer/",
  "https://www.bmwride.com/f-900-gs-offer/",
  "https://www.bmwride.com/finance-geolocation/",
  "https://www.bmwride.com/find-a-dealer/",
  "https://www.bmwride.com/find-a-dealer/a-and-s-bmw-motorcycles-roseville-ca-95661/",
  "https://www.bmwride.com/find-a-dealer/bmw-motorcycles-of-concord-concord-ca-94520/",
  "https://www.bmwride.com/find-a-dealer/bmw-motorcycles-of-fresno-fresno-ca-93727/",
  "https://www.bmwride.com/find-a-dealer/bmw-motorcycles-of-san-francisco-san-francisco-ca-94107/",
  "https://www.bmwride.com/find-a-dealer/cal-moto-livermore-livermore-ca-94551/",
  "https://www.bmwride.com/find-a-dealer/cycle-specialties-modesto-ca-95351/",
  "https://www.bmwride.com/find-a-dealer/san-jose-bmw-san-jose-ca-95128/",
  "https://www.bmwride.com/find-a-dealer-cycle-specialties-modesto-ca-95351/",
  "https://www.bmwride.com/find-local-dealer/",
  "https://www.bmwride.com/four-month-limited-offer/",
  "https://www.bmwride.com/g310gs/",
  "https://www.bmwride.com/g-310-gs-cash-finance-offer/",
  "https://www.bmwride.com/g-310-gs-offer/",
  "https://www.bmwride.com/g310r/",
  "https://www.bmwride.com/g310r-offer/",
  "https://www.bmwride.com/g-310-r-offer/",
  "https://www.bmwride.com/g650gs/",
  "https://www.bmwride.com/get-ready-to-ride-a-comprehensive-guide-to-bmw-adventure-motorcycle-models/",
  "https://www.bmwride.com/gs-models/",
  "https://www.bmwride.com/have-a-halloween-motorcycle-ride-in-northern-california/",
  "https://www.bmwride.com/have-a-motorcycle-adventure-in-lake-tahoe/",
  "https://www.bmwride.com/holiday-shopping-in-northern-california/",
  "https://www.bmwride.com/how-do-you-charge-a-bmw-ce-02-in-northern-california/",
  "https://www.bmwride.com/how-much-horsepower-does-the-bmw-k-1600-b-have-in-northern-california/",
  "https://www.bmwride.com/how-much-horsepower-does-the-bmw-k-1600-gt-have-in-northern-california/",
  "https://www.bmwride.com/how-much-horsepower-does-the-bmw-r-18-b-have-in-northern-california/",
  "https://www.bmwride.com/how-much-horsepower-does-the-bmw-r-18-have-in-northern-california/",
  "https://www.bmwride.com/how-the-bmw-k-1600-b-redefines-touring-motorcycles/",
  "https://www.bmwride.com/how-to-communicate-on-group-bmw-motorcycle-rides/",
  "https://www.bmwride.com/hp4race/",
  "https://www.bmwride.com/inventory/",
  "https://www.bmwride.com/is-the-bmw-g-310-gs-great-for-beginners-in-northern-california/",
  "https://www.bmwride.com/is-the-bmw-s-1000-xr-a-fast-motorcycle/",
  "https://www.bmwride.com/is-the-bmw-s-1000-xr-a-reliable-motorcycle-in-northern-california/",
  "https://www.bmwride.com/k-1300-s/",
  "https://www.bmwride.com/k1600b-apr-offer/",
  "https://www.bmwride.com/k-1600-b-comparison/",
  "https://www.bmwride.com/k-1600-b-easy-ride-financing/",
  "https://www.bmwride.com/k-1600-b-get-3-9-apr-financing-on-select-2023-models/",
  "https://www.bmwride.com/k-1600-b-offer/",
  "https://www.bmwride.com/k1600grandamerica/",
  "https://www.bmwride.com/k1600gt/",
  "https://www.bmwride.com/k1600gtl/",
  "https://www.bmwride.com/k1600gtlexclusive/",
  "https://www.bmwride.com/learn-about-the-2024-bmw-r-18-roctane-riding-modes-in-northern-california/",
  "https://www.bmwride.com/maintenance-and-care-tips-for-bmw-motorcycles-in-northern-california/",
  "https://www.bmwride.com/maintenance-and-care-tips-for-the-2024-bmw-r-18-roctane-northern-california/",
  "https://www.bmwride.com/motober-fest-2025/",
  "https://www.bmwride.com/new-2020-bmw-f-750-gs-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-2020-bmw-g-310-gs-inventory-for-sale-livermore/",
  "https://www.bmwride.com/new-2020-bmw-g-310-r-inventory-for-sale-livermore/",
  "https://www.bmwride.com/new-2022-r-18-serving-chico-ca/",
  "https://www.bmwride.com/new-bmw-k-1600-grand-america-inventory-for-sale/",
  "https://www.bmwride.com/new-bmw-k-1600-grand-america-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-k-1600-gt-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-k-1600-gtl-inventory-for-sale-san-jose/",
  "https://www.bmwride.com/new-bmw-r-1250-gs-adventure-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-r-1250-gs-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-r-1250-rs-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-r-18-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-r18-inventory-for-sale-sanjose/",
  "https://www.bmwride.com/new-bmw-r-ninet-5-inventory-for-sale-livermore/",
  "https://www.bmwride.com/new-bmw-s-1000-xr-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/northern-california-bmw-motorrad-lifestyle-experience/",
  "https://www.bmwride.com/oregon-bdr/",
  "https://www.bmwride.com/promotions/",
  "https://www.bmwride.com/r1200gs/",
  "https://www.bmwride.com/r1200gsadventure/",
  "https://www.bmwride.com/r1200r/",
  "https://www.bmwride.com/r1200rs/",
  "https://www.bmwride.com/r1200rt/",
  "https://www.bmwride.com/r-1250-gs/",
  "https://www.bmwride.com/r-1250-gs-adventure/",
  "https://www.bmwride.com/r-1250-gs-adventure-offer/",
  "https://www.bmwride.com/r-1250-rt/",
  "https://www.bmwride.com/r12ninet-offer/",
  "https://www.bmwride.com/r-12-ninet-offer/",
  "https://www.bmwride.com/r-12-offer/",
  "https://www.bmwride.com/r-1300-gsa-cash-finance-offer/",
  "https://www.bmwride.com/r-1300-gsa-easy-ride-financing/",
  "https://www.bmwride.com/r-1300-gsa-offer/",
  "https://www.bmwride.com/r-1300-gs-cash-finance-offer/",
  "https://www.bmwride.com/r-1300-gs-offer/",
  "https://www.bmwride.com/r-1300-rt-offer/",
  "https://www.bmwride.com/r18/",
  "https://www.bmwride.com/r-18-b-apr-offer/",
  "https://www.bmwride.com/r-18-classic-apr-financing/",
  "https://www.bmwride.com/r-18-classic-model/",
  "https://www.bmwride.com/r-18-model/",
  "https://www.bmwride.com/r-18-model-easy-ride/",
  "https://www.bmwride.com/research-2019-bmw-tour-models/",
  "https://www.bmwride.com/research-2020-bmw-adventure-motorcycles/",
  "https://www.bmwride.com/research-2020-bmw-adventure-motorcycles-2/",
  "https://www.bmwride.com/research-2020-bmw-heritage-motorcycles/",
  "https://www.bmwride.com/research-2020-bmw-roadster-motorcycles/",
  "https://www.bmwride.com/research-2020-bmw-sport-motorcycles/",
  "https://www.bmwride.com/research-2020-bmw-tour-models/",
  "https://www.bmwride.com/research-2021-bmw-adventure-motorcycles/",
  "https://www.bmwride.com/research-2021-bmw-heritage-motorcycles/",
  "https://www.bmwride.com/research-2021-bmw-roadster-motorcycles/",
  "https://www.bmwride.com/research-2021-bmw-sport-motorcycles/",
  "https://www.bmwride.com/research-2021-bmw-tour-motorcycles/",
  "https://www.bmwride.com/research-2022-bmw-adventure-motorcycles/",
  "https://www.bmwride.com/research-2022-bmw-heritage-motorcycles/",
  "https://www.bmwride.com/research-2022-bmw-sport-motorcycles/",
  "https://www.bmwride.com/research-2022-bmw-tour-motorcycles/",
  "https://www.bmwride.com/research-2022-bmw-urban-mobility-models/",
  "https://www.bmwride.com/research-bmw-m-motorcycles/",
  "https://www.bmwride.com/research-new-bmw-adventure-motorcycles/",
  "https://www.bmwride.com/research-new-bmw-heritage-lineup/",
  "https://www.bmwride.com/research-new-bmw-roadster-lineup/",
  "https://www.bmwride.com/research-new-bmw-sport-lineup/",
  "https://www.bmwride.com/research-new-bmw-tour-lineup/",
  "https://www.bmwride.com/research-new-bmw-urban-mobility-lineup/",
  "https://www.bmwride.com/research-new-models/",
  "https://www.bmwride.com/rninet/",
  "https://www.bmwride.com/rninetpure/",
  "https://www.bmwride.com/rninetracer/",
  "https://www.bmwride.com/rninetscrambler/",
  "https://www.bmwride.com/rnineturbangs/",
  "https://www.bmwride.com/road-home-sales-event/",
  "https://www.bmwride.com/s1000r/",
  "https://www.bmwride.com/s-1000-rr-offer/",
  "https://www.bmwride.com/s1000rr-track-day/",
  "https://www.bmwride.com/s1000xr/",
  "https://www.bmwride.com/schedule-test-ride/",
  "https://www.bmwride.com/service/",
  "https://www.bmwride.com/showroom/",
  "https://www.bmwride.com/sitemap/",
  "https://www.bmwride.com/store-locator/",
  "https://www.bmwride.com/test-ride/",
  "https://www.bmwride.com/the-best-bmw-motorcycle-dealerships-in-northern-california-find-your-perfect-motorcycle/",
  "https://www.bmwride.com/the-bmw-3-year-warranty-and-roadside-assistance/",
  "https://www.bmwride.com/the-bmw-f-750-gs-f-850-gs/",
  "https://www.bmwride.com/the-bmw-r-1250-gs-r-1250-rt/",
  "https://www.bmwride.com/the-fuel-efficiency-of-the-bmw-r-18-roctane-in-northern-california/",
  "https://www.bmwride.com/the-performance-features-of-the-bmw-f-900-r-in-northern-california/",
  "https://www.bmwride.com/the-performance-features-of-the-bmw-s-1000-r-and-the-bmw-m-1000-r-in-northern-california/",
  "https://www.bmwride.com/the-performance-of-the-bmw-f-900-gs-in-northern-california/",
  "https://www.bmwride.com/the-top-specs-of-the-bmw-ce-02-in-northern-california/",
  "https://www.bmwride.com/the-unmatched-power-and-precision-of-the-bmw-r-1250-r-in-northern-california/",
  "https://www.bmwride.com/unleash-your-inner-adventurer-with-bmw-motorcycles-off-road-capabilities/",
  "https://www.bmwride.com/unmatched-performance-and-style-discover-bmw-motorcycles-today/",
  "https://www.bmwride.com/videos/",
  "https://www.bmwride.com/view-inventory/",
  "https://www.bmwride.com/warranty-roadside-assistance/",
  "https://www.bmwride.com/warranty-roadside-assistance-draft/",
  "https://www.bmwride.com/what-are-the-differences-between-the-bmw-k-1600-gt-and-the-bmw-k-1600-gtl-in-northern-california/",
  "https://www.bmwride.com/what-are-the-differences-between-the-bmw-s-1000-xr-and-the-m-1000-xr-in-northern-california/",
  "https://www.bmwride.com/what-is-the-difference-between-the-bmw-r-18-b-and-the-bmw-r-18-transcontinental-in-northern-california/",
  "https://www.bmwride.com/why-buy-a-2022-bmw-r-18-motorcycle-in-the-central-valley/",
  "https://www.bmwride.com/why-buy-a-bmw-adventure-motorcycle-in-northern-california/",
  "https://www.bmwride.com/why-buy-a-bmw-adventure-motorcycle-near-san-jose-ca/",
  "https://www.bmwride.com/why-buy-a-bmw-heritage-bike-in-northern-california/",
  "https://www.bmwride.com/why-buy-a-bmw-motorcycle-in-mountain-view-ca/",
  "https://www.bmwride.com/why-buy-a-bmw-urban-mobility-motorcycle-near-chico-ca/",
  "https://www.bmwride.com/why-buy-a-bmw-urban-mobility-motorcycle-near-mountain-view-ca/",
  "https://www.bmwride.com/wyoming-bdr/",
  "https://www.bmwride.com/wyoming-bdr-2/",
  "https://www.bmwride.com/wyoming-bdr-bkp/",
  "https://www.bmwride.com/bmw-touring-motorcycles-for-sale-northern-california/",
  "https://www.bmwride.com/179-commercial-tax/",
  "https://www.bmwride.com/2016-rr-fest-willow-springs/",
  "https://www.bmwride.com/2017-apr-offer/",
  "https://www.bmwride.com/2017-long-beach-ims-promotion/",
  "https://www.bmwride.com/2018-bmw-k-1600-b/",
  "https://www.bmwride.com/2019-bmw-f-850-gs-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/2019-bmw-g-310-gs-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/2019-bmw-r-1250-gs-adventure-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/2019-bmw-r-1250-gs-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/2019-bmw-r-ninet-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/2019-bmw-s-1000-r-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/2019-bmw-s-1000-xr-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/2021-bmw-r-ninet-scrambler/",
  "https://www.bmwride.com/2025-bmw-ce-04-for-sale-northern-california-nc/",
  "https://www.bmwride.com/2025-bmw-m-1000-xr-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-r-1250-rt-for-sale-northern-california/",
  "https://www.bmwride.com/2025-bmw-r-12-ninet-for-sale-northern-california-nc/",
  "https://www.bmwride.com/2025-bmw-r-18-roctane-for-sale-northern-california/",
  "https://www.bmwride.com/3asy-ride-financing-driving-customer-loyalty/",
  "https://www.bmwride.com/about/",
  "https://www.bmwride.com/adventure/",
  "https://www.bmwride.com/annual-specials/",
  "https://www.bmwride.com/appointment/",
  "https://www.bmwride.com/august-offer-2/",
  "https://www.bmwride.com/blog/",
  "https://www.bmwride.com/bmw-car-club-of-america-program/",
  "https://www.bmwride.com/bmw-f-750-gs/",
  "https://www.bmwride.com/bmw-f-850-gs/",
  "https://www.bmwride.com/bmw-g-310-gs/",
  "https://www.bmwride.com/bmw-k-1600-grand-america/",
  "https://www.bmwride.com/bmw-motorcycle-camping-gear-northern-california/",
  "https://www.bmwride.com/bmw-motorrad-concept-r18/",
  "https://www.bmwride.com/bmw-ride-payment/",
  "https://www.bmwride.com/bmw-tire-wheel-protection/",
  "https://www.bmwride.com/c-400-x/",
  "https://www.bmwride.com/c-650-gt-3/",
  "https://www.bmwride.com/c-650-sport-2/",
  "https://www.bmwride.com/c-650-sport-4/",
  "https://www.bmwride.com/careers/",
  "https://www.bmwride.com/c-evolution-scooter/",
  "https://www.bmwride.com/check-my-vin/",
  "https://www.bmwride.com/contact-grand-opening/",
  "https://www.bmwride.com/cookie-policy-eu/",
  "https://www.bmwride.com/current-events/",
  "https://www.bmwride.com/current-promotions/",
  "https://www.bmwride.com/customer-survey/",
  "https://www.bmwride.com/dealer-info/",
  "https://www.bmwride.com/dealers/",
  "https://www.bmwride.com/dealer-specials/",
  "https://www.bmwride.com/emergency-services-program/",
  "https://www.bmwride.com/event-ride-waiver/",
  "https://www.bmwride.com/f-750-gs/",
  "https://www.bmwride.com/f-850-gs/",
  "https://www.bmwride.com/finance-calculator/",
  "https://www.bmwride.com/focus-bikes/",
  "https://www.bmwride.com/g-650-gs-2/",
  "https://www.bmwride.com/heritage/",
  "https://www.bmwride.com/july-offer/",
  "https://www.bmwride.com/july-offer-northern-california-bmw-motorcycle-dealers/",
  "https://www.bmwride.com/k-1300-s-2/",
  "https://www.bmwride.com/k1600b/",
  "https://www.bmwride.com/k-1600-gtl-exclusive-2/",
  "https://www.bmwride.com/lead-get-pre-approved/",
  "https://www.bmwride.com/lead-submitted/",
  "https://www.bmwride.com/legal/",
  "https://www.bmwride.com/limited-waranty/",
  "https://www.bmwride.com/membership/",
  "https://www.bmwride.com/membershippromo/",
  "https://www.bmwride.com/military-purchase-program/",
  "https://www.bmwride.com/models-adventure/",
  "https://www.bmwride.com/models-heritage/",
  "https://www.bmwride.com/models-roadster/",
  "https://www.bmwride.com/models-sport/",
  "https://www.bmwride.com/models-tour/",
  "https://www.bmwride.com/models-urban-mobility/",
  "https://www.bmwride.com/motorcycles/",
  "https://www.bmwride.com/motorrad-appreciation-program/",
  "https://www.bmwride.com/msf-ridercoach-program/",
  "https://www.bmwride.com/new-bmw-f-750-gs-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-g-310-r-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-k-1600-b-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-k-1600-gtl-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-r-1200-gs-inventory-for-sale-riverside/",
  "https://www.bmwride.com/new-bmw-r-1250-r-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-r-1250-rt-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-r-ninet-pure-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-s-1000-rr-inventory-for-sale-northern-california/",
  "https://www.bmwride.com/new-bmw-s-1000-xr-inventory-for-sale/",
  "https://www.bmwride.com/new-event-5-20/",
  "https://www.bmwride.com/newsletter-signup/",
  "https://www.bmwride.com/new-specials/",
  "https://www.bmwride.com/norcalbmw-current-promotions/",
  "https://www.bmwride.com/northern-california-bmw-motorcycle-routes/",
  "https://www.bmwride.com/northern-california-motorcycle-friendly-cafes-diner/",
  "https://www.bmwride.com/opt-out-preferences/",
  "https://www.bmwride.com/order-parts/",
  "https://www.bmwride.com/parts-accessories/",
  "https://www.bmwride.com/parts-and-service/",
  "https://www.bmwride.com/past-events/",
  "https://www.bmwride.com/photos/",
  "https://www.bmwride.com/pixel-motion-privacy-policy/",
  "https://www.bmwride.com/pre-owned-inventory/",
  "https://www.bmwride.com/privacy/",
  "https://www.bmwride.com/privacy-policy/",
  "https://www.bmwride.com/privacy-statement-eu/",
  "https://www.bmwride.com/privacy-statement-us/",
  "https://www.bmwride.com/quick-quote/",
  "https://www.bmwride.com/request-get-pre-approved/",
  "https://www.bmwride.com/research-2019-bmw-adventure-motorcycle-models/",
  "https://www.bmwride.com/research-2019-bmw-heritage-models/",
  "https://www.bmwride.com/research-2019-bmw-roadster-lineup/",
  "https://www.bmwride.com/research-bikes/",
  "https://www.bmwride.com/resources/",
  "https://www.bmwride.com/ride-on/",
  "https://www.bmwride.com/ride-smart-reward/",
  "https://www.bmwride.com/ride-smart-reward-program/",
  "https://www.bmwride.com/r-nine-t-urban-gs/",
  "https://www.bmwride.com/roadside-assistance/",
  "https://www.bmwride.com/roadside-assistance-limited-warranty/",
  "https://www.bmwride.com/schedule-service/",
  "https://www.bmwride.com/service-specials/",
  "https://www.bmwride.com/shopping-tools/",
  "https://www.bmwride.com/special-offers/",
  "https://www.bmwride.com/street-vibration/",
  "https://www.bmwride.com/take-demo-ride/",
  "https://www.bmwride.com/terms-conditions/",
  "https://www.bmwride.com/the-bmw-card/",
  "https://www.bmwride.com/the-bmw-k-1600-b-grand-america/",
  "https://www.bmwride.com/the-new-bmw-r-1250-gs/",
  "https://www.bmwride.com/the-new-bmw-r-1250-rt/",
  "https://www.bmwride.com/the-new-bmw-s-1000-rr/",
  "https://www.bmwride.com/used/",
  "https://www.bmwride.com/used-specials/",
  "https://www.bmwride.com/value-your-trade/",
  "https://www.bmwride.com/virtual-tour/",
];

// ─────────────────────────────────────────────
// STATUSES — add or rename freely
// ─────────────────────────────────────────────
const STATUSES = [
  { id: "pending",    label: "Pending",     color: "#64748b" },
  { id: "hasimage",   label: "Has Image",   color: "#3b82f6" },
  { id: "oem",        label: "OEM Image",   color: "#8b5cf6" },
  { id: "inprogress", label: "In-Progress", color: "#f59e0b" },
  { id: "noimage",    label: "No Image",    color: "#22c55e" },
];

const MAX_TABS = 5;
const DASHBOARD_PORT = 19432;
const EXPORT_DIR = path.join(__dirname, "exports");
const STATE_FILE = path.join(__dirname, "url-checker-state.json");
const BACKUP_DIR = path.join(__dirname, "backups");

// ─────────────────────────────────────────────
// SHARED STATE
// ─────────────────────────────────────────────
function createFreshItem(url, id) {
  return {
    id,
    url,
    status: "pending",
    note: "",
    tabOpen: false,
    loaded: false,
    failed: false,
  };
}

function createFreshState() {
  return {
    items: URLS.map((url, i) => createFreshItem(url, i)),
  };
}

function isValidStatus(status) {
  return STATUSES.some((item) => item.id === status);
}

function normalizeSavedItem(savedItem, fallbackItem) {
  if (!savedItem || typeof savedItem !== "object") return fallbackItem;

  const wasOpen = savedItem.tabOpen === true;
  return {
    ...fallbackItem,
    status: isValidStatus(savedItem.status) ? savedItem.status : fallbackItem.status,
    note: typeof savedItem.note === "string" ? savedItem.note : fallbackItem.note,
    tabOpen: false,
    loaded: wasOpen ? false : savedItem.loaded === true,
    failed: savedItem.failed === true,
  };
}

function mergeSavedState(savedState) {
  const savedItems = Array.isArray(savedState?.items) ? savedState.items : [];
  const savedByUrl = new Map();
  savedItems.forEach((item) => {
    if (typeof item?.url === "string") savedByUrl.set(item.url, item);
  });

  return {
    items: URLS.map((url, i) => {
      const fallbackItem = createFreshItem(url, i);
      const savedItem = savedByUrl.get(url) || savedItems.find((item) => item?.id === i);
      return normalizeSavedItem(savedItem, fallbackItem);
    }),
  };
}

function ensureBackupDir() {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  return BACKUP_DIR;
}

function getTimestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function getBackupPath(reason) {
  const safeReason = String(reason || "manual").replace(/[^a-z0-9_-]/gi, "-");
  return path.join(ensureBackupDir(), `url-checker-state-${getTimestamp()}-${safeReason}.json`);
}

function backupExistingStateFile(reason) {
  if (!fs.existsSync(STATE_FILE)) return null;

  const backupPath = getBackupPath(reason);
  fs.copyFileSync(STATE_FILE, backupPath);
  return backupPath;
}

function loadState() {
  if (!fs.existsSync(STATE_FILE)) return createFreshState();

  const backupPath = backupExistingStateFile("startup");
  try {
    const savedState = JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
    if (backupPath) console.log(`Loaded saved state. Backup created: ${backupPath}`);
    return mergeSavedState(savedState);
  } catch (err) {
    console.warn(`Could not load saved state, starting fresh: ${err.message}`);
    if (backupPath) console.warn(`Unreadable state was backed up to: ${backupPath}`);
    return createFreshState();
  }
}

function serializeState() {
  return {
    savedAt: new Date().toISOString(),
    items: state.items.map((item) => ({
      id: item.id,
      url: item.url,
      status: item.status,
      note: item.note || "",
      tabOpen: item.tabOpen === true,
      loaded: item.loaded === true,
      failed: item.failed === true,
    })),
  };
}

function writeStateFile(targetPath = STATE_FILE) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  const tempPath = `${targetPath}.tmp`;
  fs.writeFileSync(tempPath, `${JSON.stringify(serializeState(), null, 2)}\n`, "utf8");
  fs.renameSync(tempPath, targetPath);
}

function persistState() {
  try {
    writeStateFile();
    return true;
  } catch (err) {
    console.warn(`Could not save state: ${err.message}`);
    return false;
  }
}

function createStateBackup(reason = "manual") {
  const backupPath = getBackupPath(reason);
  writeStateFile(backupPath);
  return backupPath;
}

const state = loadState();
persistState();

function getQueuedItems(limit = 1) {
  return state.items
    .filter((item) => !item.loaded && !item.failed && !item.tabOpen)
    .slice(0, limit);
}

function getItem(id) {
  return state.items.find((x) => x.id === id);
}

function applyItemUpdate({ id, status, note }) {
  const item = getItem(Number(id));
  if (!item) return false;
  if (status !== undefined && isValidStatus(status)) item.status = status;
  if (note !== undefined) item.note = String(note);
  persistState();
  return true;
}

function ensureExportDir() {
  fs.mkdirSync(EXPORT_DIR, { recursive: true });
  return EXPORT_DIR;
}

function getExportPath(filename) {
  const safeFilename = path.basename(filename || "url-check-results.csv");
  return path.join(ensureExportDir(), safeFilename);
}

// ─────────────────────────────────────────────
// DASHBOARD HTML
// ─────────────────────────────────────────────
function buildDashboardHTML() {
  const statusesJSON = JSON.stringify(STATUSES);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>URL Checker — Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet"/>
<style>
  :root {
    --bg: #0b0d12; --surface: #13161f; --border: #1e2130;
    --text: #cdd5e0; --muted: #4a5568; --accent: #6366f1; --accent2: #818cf8;
    --mono: 'IBM Plex Mono', monospace; --sans: 'IBM Plex Sans', sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--text); font-family: var(--sans); min-height: 100vh; padding-bottom: 60px; }

  header {
    position: sticky; top: 0; z-index: 100;
    background: rgba(11,13,18,0.96); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 14px 28px; display: flex; align-items: center; gap: 16px;
  }
  header h1 { font-family: var(--mono); font-size: 14px; font-weight: 600; color: #fff; letter-spacing: 0.05em; flex: 1; }
  header h1 span { color: var(--accent2); }

  .stats { display: flex; gap: 10px; font-family: var(--mono); font-size: 12px; }
  .stat { background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: 4px 10px; }
  .stat b { color: #fff; }

  .btn { font-family: var(--mono); font-size: 12px; font-weight: 500; padding: 6px 14px; border-radius: 6px; border: none; cursor: pointer; transition: opacity .15s; }
  .btn:hover { opacity: .8; }
  .btn-export { background: var(--accent); color: #fff; }
  .btn-refresh { background: var(--surface); color: var(--text); border: 1px solid var(--border); }

  .legend { display: flex; flex-wrap: wrap; gap: 8px; padding: 10px 28px; border-bottom: 1px solid var(--border); }
  .legend-item { display: flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 11px; color: var(--muted); }
  .legend-dot { width: 8px; height: 8px; border-radius: 50%; }

  .table-wrap { padding: 20px 28px; }
  table { width: 100%; border-collapse: collapse; }
  th { font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--border); }
  tr.row { border-bottom: 1px solid var(--border); transition: background .1s; }
  tr.row:hover { background: rgba(255,255,255,0.02); }
  tr.row.tab-open { background: rgba(99,102,241,0.06); }
  td { padding: 10px 10px; vertical-align: middle; }

  .idx { font-family: var(--mono); font-size: 11px; color: var(--muted); width: 36px; }
  .url-cell { font-family: var(--mono); font-size: 12px; color: #a5b4fc; max-width: 340px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .url-cell a { color: inherit; text-decoration: none; }
  .url-cell a:hover { text-decoration: underline; }

  .badge { display: inline-block; font-family: var(--mono); font-size: 10px; padding: 2px 8px; border-radius: 4px; }
  .badge-open  { background: rgba(99,102,241,.2); color: var(--accent2); border: 1px solid rgba(99,102,241,.3); }
  .badge-was   { background: transparent; color: var(--muted); border: 1px solid var(--border); }
  .badge-fail  { background: rgba(239,68,68,.15); color: #fca5a5; border: 1px solid rgba(239,68,68,.3); }
  .badge-queue { background: transparent; color: #2d3447; border: 1px solid #1a1e2c; }

  .status-wrap { display: flex; align-items: center; gap: 6px; }
  .status-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  select.sel {
    appearance: none; background: var(--surface); color: var(--text);
    border: 1px solid var(--border); border-radius: 6px;
    padding: 4px 26px 4px 10px; font-family: var(--mono); font-size: 12px; cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 8px center;
    min-width: 130px; transition: border-color .15s;
  }
  select.sel:focus { outline: none; border-color: var(--accent); }

  input.note {
    background: transparent; border: none; border-bottom: 1px solid transparent;
    color: var(--muted); font-family: var(--sans); font-size: 12px;
    padding: 3px 4px; width: 200px; transition: border-color .15s, color .15s;
  }
  input.note:focus { outline: none; border-bottom-color: var(--accent); color: var(--text); }
  input.note::placeholder { color: #2a303d; }

  #toast {
    position: fixed; bottom: 24px; right: 24px;
    background: #22c55e; color: #fff; font-family: var(--mono); font-size: 12px;
    padding: 10px 18px; border-radius: 8px;
    opacity: 0; pointer-events: none; transition: opacity .3s; z-index: 9999;
  }
  #toast.show { opacity: 1; }

  body::before {
    content: ''; position: fixed; inset: 0;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px);
    pointer-events: none; z-index: 0;
  }
</style>
</head>
<body>

<header>
  <h1>🔍 URL Checker <span>/ Dashboard</span></h1>
  <div class="stats">
    <div class="stat">Total: <b id="s-total">0</b></div>
    <div class="stat">Open: <b id="s-open">0</b></div>
    <div class="stat">Done: <b id="s-done">0</b></div>
    <div class="stat">Pending: <b id="s-pending">0</b></div>
  </div>
  <button class="btn btn-refresh" onclick="loadData()">↺ Refresh</button>
  <button class="btn btn-refresh" onclick="backupData()">Backup Data</button>
  <button class="btn btn-export" onclick="exportCSV()">⬇ Export CSV</button>
</header>

<div class="legend" id="legend"></div>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>#</th><th>URL</th><th>Tab</th><th>Status</th><th>Note</th>
      </tr>
    </thead>
    <tbody id="tbody"></tbody>
  </table>
</div>

<div id="toast">✓ Saved</div>

<script>
const STATUSES = ${statusesJSON};
const colorMap = Object.fromEntries(STATUSES.map(s => [s.id, s.color]));
let items = [];

// Build legend
const legend = document.getElementById('legend');
STATUSES.forEach(s => {
  const el = document.createElement('div');
  el.className = 'legend-item';
  el.innerHTML = '<div class="legend-dot" style="background:' + s.color + '"></div>' + s.label;
  legend.appendChild(el);
});

async function loadData() {
  const r = await fetch('/api/state');
  const data = await r.json();
  // Merge — preserve note/status inputs the user may be typing
  data.items.forEach(fresh => {
    const existing = items.find(x => x.id === fresh.id);
    if (existing) {
      existing.tabOpen = fresh.tabOpen;
      existing.loaded  = fresh.loaded;
      existing.failed  = fresh.failed;
      // Only update status/note from server if local element is NOT focused
      const selEl  = document.getElementById('sel-'  + fresh.id);
      const noteEl = document.getElementById('note-' + fresh.id);
      if (!selEl  || document.activeElement !== selEl)  existing.status = fresh.status;
      if (!noteEl || document.activeElement !== noteEl) existing.note   = fresh.note;
    }
  });
  if (items.length === 0) items = data.items;
  renderTable();
  updateStats();
}

function updateStats() {
  document.getElementById('s-total').textContent   = items.length;
  document.getElementById('s-open').textContent    = items.filter(x => x.tabOpen).length;
  document.getElementById('s-done').textContent    = items.filter(x => x.status === 'done').length;
  document.getElementById('s-pending').textContent = items.filter(x => x.status === 'pending').length;
}

function renderTable() {
  const tbody = document.getElementById('tbody');
  // Update existing rows or build fresh
  if (tbody.children.length === items.length) {
    items.forEach(item => updateRow(item));
    return;
  }
  tbody.innerHTML = '';
  items.forEach(item => {
    const tr = document.createElement('tr');
    tr.className = 'row';
    tr.id = 'row-' + item.id;
    const opts = STATUSES.map(s =>
      '<option value="' + s.id + '">' + s.label + '</option>'
    ).join('');
    tr.innerHTML =
      '<td class="idx">' + (item.id + 1) + '</td>' +
      '<td class="url-cell"><a href="' + item.url + '" target="_blank" title="' + item.url + '">' + item.url + '</a></td>' +
      '<td id="badge-' + item.id + '"></td>' +
      '<td><div class="status-wrap">' +
        '<div class="status-dot" id="dot-' + item.id + '"></div>' +
        '<select class="sel" id="sel-' + item.id + '" onchange="setStatus(' + item.id + ', this.value)">' + opts + '</select>' +
      '</div></td>' +
      '<td><input class="note" type="text" id="note-' + item.id + '" placeholder="add note..." onchange="setNote(' + item.id + ', this.value)"/></td>';
    tbody.appendChild(tr);
    updateRow(item);
  });
}

function updateRow(item) {
  const row = document.getElementById('row-' + item.id);
  if (!row) return;
  row.className = 'row' + (item.tabOpen ? ' tab-open' : '');

  const badge = document.getElementById('badge-' + item.id);
  if (badge) {
    if (item.tabOpen)       badge.innerHTML = '<span class="badge badge-open">● OPEN</span>';
    else if (item.failed)   badge.innerHTML = '<span class="badge badge-fail">✕ FAILED</span>';
    else if (item.loaded)   badge.innerHTML = '<span class="badge badge-was">✓ visited</span>';
    else                    badge.innerHTML = '<span class="badge badge-queue">— queued</span>';
  }

  const dot  = document.getElementById('dot-'  + item.id);
  const sel  = document.getElementById('sel-'  + item.id);
  const note = document.getElementById('note-' + item.id);
  if (dot)  dot.style.background = colorMap[item.status] || '#64748b';
  if (sel  && document.activeElement !== sel)  sel.value = item.status;
  if (note && document.activeElement !== note) note.value = item.note || '';
}

async function setStatus(id, value) {
  const item = items.find(x => x.id === id);
  if (item) item.status = value;
  const dot = document.getElementById('dot-' + id);
  if (dot) dot.style.background = colorMap[value] || '#64748b';
  await fetch('/api/update', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ id, status: value })
  });
  updateStats(); showToast();
}

async function setNote(id, value) {
  const item = items.find(x => x.id === id);
  if (item) item.note = value;
  await fetch('/api/update', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ id, note: value })
  });
  showToast();
}

async function backupData() {
  try {
    const r = await fetch('/api/backup', { method: 'POST' });
    if (!r.ok) throw new Error('backup failed');
    showToast('Backup saved');
  } catch (err) {
    showToast('Backup failed');
  }
}

function showToast(message) {
  const t = document.getElementById('toast');
  t.textContent = message || 'Saved';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

function exportCSV() {
  const rows = [['URL','Status','Fixed By','Notes']];
  items.forEach(item => rows.push([
    item.url, item.status, '', item.note || ''
  ]));
  const csv = rows.map(r => r.map(c => '"' + String(c).replace(/"/g,'""') + '"').join(',')).join('\\n');
  const a = document.createElement('a');
  const url = URL.createObjectURL(new Blob([csv], {type:'text/csv;charset=utf-8'}));
  a.href = url;
  a.download = 'url-check-results.csv';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('CSV export started');
}

loadData();
setInterval(loadData, 3000);
</script>
</body>
</html>`;
}

// ─────────────────────────────────────────────
// MINI HTTP SERVER
// ─────────────────────────────────────────────
function startServer() {
  const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

    if (req.url === "/" || req.url === "/dashboard") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(buildDashboardHTML());
      return;
    }
    if (req.url === "/api/state") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(state));
      return;
    }
    if (req.url === "/api/update" && req.method === "POST") {
      let body = "";
      req.on("data", (d) => (body += d));
      req.on("end", () => {
        try {
          applyItemUpdate(JSON.parse(body));
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: true }));
        } catch {
          res.writeHead(400); res.end("bad request");
        }
      });
      return;
    }
    if (req.url === "/api/backup" && req.method === "POST") {
      try {
        const backupPath = createStateBackup("manual");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true, path: backupPath }));
      } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
      return;
    }
    res.writeHead(404); res.end("not found");
  });
  server.listen(DASHBOARD_PORT, "127.0.0.1");
  return server;
}

// ─────────────────────────────────────────────
// OVERLAY injected into each site tab
// ─────────────────────────────────────────────
function buildOverlayScript(item) {
  const colorEntries = STATUSES.map((s) => `"${s.id}":"${s.color}"`).join(",");
  const options = STATUSES.map((s) => `<option value="${s.id}">${s.label}</option>`).join("");
  return `
(function(){
  const ex = document.getElementById('__uc__');
  if(ex) ex.remove();
  const el = document.createElement('div');
  el.id='__uc__';
  el.style.cssText='position:fixed;bottom:16px;right:16px;z-index:2147483647;background:rgba(11,13,18,0.96);color:#cdd5e0;font-family:monospace;font-size:12px;padding:12px 16px;border-radius:10px;border:1px solid rgba(99,102,241,0.4);box-shadow:0 8px 32px rgba(0,0,0,0.5);min-width:260px;max-width:340px;line-height:1.7;';
  el.innerHTML=\`
    <div style="color:#818cf8;font-weight:600;font-size:11px;letter-spacing:.08em;margin-bottom:4px;">🔍 URL CHECKER</div>
    <div style="color:#4a5568;font-size:10px;word-break:break-all;margin-bottom:8px;">${item.url}</div>
    <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
      <div id="__uc_dot__" style="width:8px;height:8px;border-radius:50%;background:#64748b;flex-shrink:0;"></div>
      <select id="__uc_sel__" style="flex:1;appearance:none;background:#13161f;color:#cdd5e0;border:1px solid #1e2130;border-radius:6px;padding:4px 8px;font-family:monospace;font-size:12px;cursor:pointer;">
        ${options}
      </select>
    </div>
    <input id="__uc_note__" type="text" placeholder="add a note..."
      style="width:100%;background:transparent;border:none;border-bottom:1px solid #1e2130;color:#94a3b8;font-family:monospace;font-size:11px;padding:3px 4px;outline:none;"/>
    <div id="__uc_saved__" style="font-size:10px;color:#22c55e;margin-top:4px;opacity:0;transition:opacity .3s;">✓ Saved to dashboard</div>
  \`;
  document.body.appendChild(el);

  const COLORS={${colorEntries}};
  const dot=document.getElementById('__uc_dot__');
  const sel=document.getElementById('__uc_sel__');
  const noteEl=document.getElementById('__uc_note__');
  const savedEl=document.getElementById('__uc_saved__');
  let dirty=false;

  async function fetchCurrent(){
    try{
      const r=await fetch('http://127.0.0.1:${DASHBOARD_PORT}/api/state');
      const d=await r.json();
      const it=d.items.find(x=>x.id===${item.id});
      if(!it)return;
      if(dirty)return;
      sel.value=it.status;
      dot.style.background=COLORS[it.status]||'#64748b';
      noteEl.value=it.note||'';
    }catch(e){}
  }

  async function save(){
    dirty=true;
    dot.style.background=COLORS[sel.value]||'#64748b';
    const payload={id:${item.id},status:sel.value,note:noteEl.value};
    let ok=false;
    try{
      if(typeof window.__urlCheckerUpdate==='function'){
        await window.__urlCheckerUpdate(payload);
        ok=true;
      }else{
        const r=await fetch('http://127.0.0.1:${DASHBOARD_PORT}/api/update',{
        method:'POST',headers:{'Content-Type':'application/json'},
          body:JSON.stringify(payload)
        });
        ok=r.ok;
      }
    }catch(e){}
    if(ok){
      savedEl.textContent='✓ Saved to dashboard';
      savedEl.style.color='#22c55e';
      savedEl.style.opacity='1';
      setTimeout(()=>savedEl.style.opacity='0',1800);
    }else{
      savedEl.textContent='Save failed';
      savedEl.style.color='#fca5a5';
      savedEl.style.opacity='1';
    }
  }

  sel.addEventListener('change',save);
  noteEl.addEventListener('change',save);
  noteEl.addEventListener('input',()=>{
    clearTimeout(noteEl.__ucTimer);
    noteEl.__ucTimer=setTimeout(save,250);
  });
  fetchCurrent();
})();`;
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────
async function main() {
  const server = startServer();
  const activePages = new Map();

  console.log(`\n🚀 URL Checker — ${URLS.length} URLs, ${MAX_TABS} tabs at a time`);
  console.log(`   Dashboard → http://127.0.0.1:${DASHBOARD_PORT}\n`);

  const browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  const context = await browser.newContext({ viewport: null, acceptDownloads: true });

  const dashPage = await context.newPage();
  dashPage.on("download", async (download) => {
    const targetPath = getExportPath(download.suggestedFilename());
    try {
      await download.saveAs(targetPath);
      console.log(`  CSV exported: ${targetPath}`);
    } catch (err) {
      console.warn(`  ⚠  CSV export failed: ${err.message}`);
    }
  });
  await dashPage.goto(`http://127.0.0.1:${DASHBOARD_PORT}`);

  async function focusFirstOpenUrlTab() {
    for (const page of activePages.keys()) {
      if (!page.isClosed()) {
        await page.bringToFront().catch(() => {});
        return;
      }
    }
  }

  async function openTab(item, { refocusQueue = false } = {}) {
    item.tabOpen = true;
    persistState();
    const page = await context.newPage();
    activePages.set(page, item);
    await page.exposeFunction("__urlCheckerUpdate", (payload) => applyItemUpdate(payload || {}));

    if (refocusQueue) {
      await focusFirstOpenUrlTab();
    }

    try {
      await page.goto(item.url, { waitUntil: "domcontentloaded", timeout: 20000 });
      item.loaded = true;
      persistState();
      await page.evaluate(buildOverlayScript(item));
    } catch (err) {
      console.warn(`  ⚠  Failed: ${item.url} — ${err.message}`);
      item.failed = true;
      persistState();
      try { await page.evaluate(buildOverlayScript(item)); } catch (_) {}
    }

    console.log(`  [${item.id + 1}/${URLS.length}] Opened: ${item.url}`);

    page.on("close", async () => {
      item.tabOpen = false;
      activePages.delete(page);
      persistState();
      console.log(`  ✓ Closed [${item.id + 1}]: ${item.url}  →  ${item.status}`);

      const [nextItem] = getQueuedItems(1);

      if (nextItem) {
        await new Promise((r) => setTimeout(r, 300));
        await openTab(nextItem, { refocusQueue: true });
        await focusFirstOpenUrlTab();
      } else if (activePages.size === 0) {
        console.log("\n✅ All URLs checked! Dashboard is still open for review.\n");
      }
    });

    return page;
  }

  // Open initial batch
  const initial = getQueuedItems(MAX_TABS);
  for (const item of initial) {
    await openTab(item);
  }
  await focusFirstOpenUrlTab();

  const queued = getQueuedItems(URLS.length).length;
  console.log(`\n📋 ${queued} URLs queued — close a tab to load the next one.\n`);

  await new Promise((resolve) => browser.on("disconnected", resolve));
  server.close();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
