# Universal Elevators Bangalore — Modern Website

> **Tagline:** *"Trust for a Joyful Journey"*  
> **Location:** Bangalore, Karnataka, India  
> **Experience:** 10+ Years of Engineering Excellence  
> **Helplines:** +91 98445 41114 & +91 98441 41114  

A modern, responsive, high-performance website created for **Universal Elevators Bangalore**. Built with clean semantic HTML5, modern CSS3, and lightweight vanilla JavaScript.

---

## 📁 Project Structure

```text
universal-elevators-new/
├── index.html                   # Homepage (Hero, Elevator Cards, Services, AMC, Projects, FAQ, etc.)
├── about.html                   # About Us (Company Profile, 10+ Years, Engineering Standards)
├── elevators.html               # Elevators Overview & Architectural Guide
├── home-elevators.html          # Detail Page: Compact & Pitless Residential Lifts
├── villa-elevators.html         # Detail Page: Luxury Panoramic Glass Lifts
├── passenger-elevators.html     # Detail Page: Commercial High-Speed Passenger Lifts
├── hospital-elevators.html      # Detail Page: Stretcher & Bed Healthcare Elevators
├── industrial-elevators.html    # Detail Page: Heavy-Duty Goods & Freight Elevators
├── apartment-elevators.html     # Detail Page: Multi-family Residential Society Elevators
├── services.html                # Comprehensive Services & Breakdown Support
├── amc.html                     # Dedicated Annual Maintenance Contract (AMC) & 28-Point Audit
├── projects.html                # Filterable Project Portfolio & Future Video/Photo Space
├── contact.html                 # Contact Info, Interactive Quote Form & Google Maps Embed
├── README.md                    # Deployment & Setup Documentation
├── css/
│   └── style.css                # Custom CSS (Deep Navy, Royal Blue & Gold Palette, Responsive)
├── js/
│   └── main.js                  # Vanilla JS (Mobile Drawer, FAQ Accordion, Filters, Forms)
└── assets/
    └── images/
        ├── logo.svg             # Universal Elevators brand logo (Elevator tower motif)
        ├── logo-white.svg       # Brand logo for dark backgrounds
        ├── favicon.svg          # Favicon icon
        └── *.jpg                # High-res curated images for each elevator model & service
```

---

## 🚀 How to Run Locally

You can preview the website locally using any standard HTTP server or by opening `index.html` directly:

### Option A: Using Python built-in server (Recommended)
Open PowerShell in the project directory:
```powershell
cd "C:\Users\nymak\.gemini\antigravity\scratch\universal-elevators-new"
python -m http.server 8080
```
Then visit: [http://localhost:8080](http://localhost:8080)

### Option B: Using Node `npx serve`
```bash
npx serve .
```

---

## 🌐 How to Deploy to GitHub & GitHub Pages

Since this website uses 100% relative paths (`./css/style.css`, `assets/images/...`, `home-elevators.html`), it works out-of-the-box on GitHub Pages root or any subfolder path (e.g. `https://<username>.github.io/universal-elevators-new/`).

### Step 1: Initialize Git and Commit
```bash
cd "C:\Users\nymak\.gemini\antigravity\scratch\universal-elevators-new"
git init
git add .
git commit -m "Initial commit: Universal Elevators Bangalore modern website"
```

### Step 2: Push to Your GitHub Repository
1. Create a new repository on [GitHub](https://github.com/new) named `universal-elevators-new` (or your preferred name).
2. Connect your local repository and push:
```bash
git branch -M main
git remote add origin https://github.com/<your-username>/universal-elevators-new.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** &rarr; **Pages** (under Code and automation in the left sidebar).
3. Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
4. Set branch to `main` and folder to `/(root)`.
5. Click **Save**.
6. Within 1-2 minutes, your website will be live at `https://<your-username>.github.io/universal-elevators-new/`.

---

## 🔗 How to Connect a Custom Domain (e.g., universalelevators.in)

1. In GitHub repository **Settings** &rarr; **Pages**, enter your domain under **Custom domain** (e.g., `www.universalelevators.in` or `universalelevators.in`) and click **Save**.
2. Log into your DNS provider (GoDaddy, Namecheap, Cloudflare, BigRock, etc.):
   - If using `www.universalelevators.in`: add a **CNAME** record pointing `www` to `<your-username>.github.io`.
   - If using apex `universalelevators.in`: add **A records** pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
3. Check the **Enforce HTTPS** box in GitHub Pages settings.

---

## 📋 Information & Assets to Provide When Ready

All sections have been populated with realistic, production-quality copy, accurate specifications, and verified contact phone numbers. The following placeholders are cleanly identified for whenever you want to plug in your verified assets:

1. **Official Email Address:** Replace `contact@universalelevators.in` with your registered domain email or Gmail.
2. **Exact Bangalore Office / Factory Address:** Currently marked as `Industrial Suburb, Yeshwanthpur / Rajajinagar, Bangalore - 560022 [Demo / Placeholder]`.
3. **Google Maps Verified Place Embed:** Once your Google Business Profile is verified on Google Maps, paste its exact `embed` iframe URL into `index.html` and `contact.html`.
4. **Client Project Photos & Videos:** The project gallery has dedicated placeholder slots reserved for ongoing customer installations across Bangalore.
