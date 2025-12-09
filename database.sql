CREATE TABLE motor_reference (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(50),
    type VARCHAR(50),
    cc INTEGER,
    category VARCHAR(50)
);

CREATE TABLE detection (
    id SERIAL PRIMARY KEY,
    image_path TEXT NOT NULL,
    detected BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE price_scraping (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(50),
    type VARCHAR(50),
    source VARCHAR(50), -- OLX, FB market, Tokopedia (optional)
    price INTEGER,
    scraped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE estimation (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(50),
    type VARCHAR(50),
    condition VARCHAR(50),   -- bekas / baru
    estimated_price INTEGER,
    avg_market_price INTEGER,
    confidence NUMERIC,      -- optional (trust level)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
