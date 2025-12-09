app.post("/api/upload", upload.single("image"), async (req, res) => {
    const imagePath = req.file.path;

    // 1. Run YOLO detection
    const yolo = await runYOLO(imagePath);

    // 2. Run classification
    const motorInfo = await classifyMotor(imagePath);

    // 3. Scrape OLX harga real
    const scrapedPrices = await scrapeOLX(motorInfo.brand, motorInfo.type);

    // 4. XGBoost prediction (final estimation)
    const estimatedPrice = await predictPrice({ 
        brand: motorInfo.brand,
        type: motorInfo.type,
        condition: motorInfo.condition,
        scraped: scrapedPrices
    });

    return res.json({
        detection: yolo,
        info: motorInfo,
        scrapedPrices,
        estimatedPrice
    });
});
