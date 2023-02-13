const { createCanvas, registerFont } = require("canvas");
const express = require("express");
const app = express();

registerFont('minecraft.otf', { family: 'Minecraft' });

const canvas = createCanvas(350, 80);
const ctx = canvas.getContext('2d');

const colours = Object.freeze({
    BLACK: "#000000",
    DARK_BLUE: "#0000AA",
    DARK_GREEN: "#00AA00",
    DARK_AQUA: "#00AAAA",
    DARK_RED: "#AA0000",
    DARK_PURPLE: "#AA00AA",
    GOLD: "#FFAA00",
    GRAY: "#AAAAAA",
    DARK_GRAY: "#555555",
    BLUE: "#5555FF",
    GREEN: "#55FF55",
    AQUA: "#55FFFF",
    RED: "#FF5555",
    LIGHT_PURPLE: "#FF55FF",
    YELLOW: "#FFFF55",
    WHITE: "#FFFFFF"
});

const shadows = new Map([
    [colours.BLACK, "#000000"],
    [colours.DARK_BLUE, "#00002A"],
    [colours.DARK_GREEN, "#002A00"],
    [colours.DARK_AQUA, "#002A2A"],
    [colours.DARK_RED, "#2A0000"],
    [colours.DARK_PURPLE, "#2A002A"],
    [colours.GOLD, "#2A2A00"],
    [colours.GRAY, "#2A2A2A"],
    [colours.DARK_GRAY, "#151515"],
    [colours.BLUE, "#15153F"],
    [colours.GREEN, "#153F15"],
    [colours.AQUA, "#153F3F"],
    [colours.RED, "#3F1515"],
    [colours.LIGHT_PURPLE, "#3F153F"],
    [colours.YELLOW, "#3F3F15"],
    [colours.WHITE, "#3F3F3F"]
]);

const symbols = Object.freeze({
    FIRST: "✫",
    SECOND: "✪",
    THIRD: "⚝"
});

const prestigeColours = [
    { name: "Stone", color: colours.GRAY, symbol: symbols.FIRST },
    { name: "Iron", color: colours.WHITE, symbol: symbols.FIRST },
    { name: "Gold", color: colours.GOLD, symbol: symbols.FIRST },
    { name: "Diamond", color: colours.AQUA, symbol: symbols.FIRST },
    { name: "Emerald", color: colours.DARK_GREEN, symbol: symbols.FIRST },
    { name: "Sapphire", color: colours.DARK_AQUA, symbol: symbols.FIRST },
    { name: "Ruby", color: colours.DARK_RED, symbol: symbols.FIRST },
    { name: "Crystal", color: colours.LIGHT_PURPLE, symbol: symbols.FIRST },
    { name: "Opal", color: colours.BLUE, symbol: symbols.FIRST },
    { name: "Amethyst", color: colours.DARK_PURPLE, symbol: symbols.FIRST },
    { name: "Rainbow", color: [colours.RED, colours.GOLD, colours.YELLOW, colours.GREEN, colours.AQUA, colours.LIGHT_PURPLE, colours.DARK_PURPLE], symbol: symbols.FIRST },

    { name: "Iron Prime", color: [colours.GRAY, colours.WHITE, colours.WHITE, colours.WHITE, colours.WHITE, colours.GRAY, colours.GRAY], symbol: symbols.SECOND },
    { name: "Gold Prime", color: [colours.GRAY, colours.YELLOW, colours.YELLOW, colours.YELLOW, colours.YELLOW, colours.GOLD, colours.GRAY], symbol: symbols.SECOND },
    { name: "Diamond Prime", color: [colours.GRAY, colours.AQUA, colours.AQUA, colours.AQUA, colours.AQUA, colours.DARK_AQUA, colours.GRAY], symbol: symbols.SECOND },
    { name: "Emerald Prime", color: [colours.GRAY, colours.GREEN, colours.GREEN, colours.GREEN, colours.GREEN, colours.DARK_GREEN, colours.GRAY], symbol: symbols.SECOND },
    { name: "Sapphire Prime", color: [colours.GRAY, colours.DARK_AQUA, colours.DARK_AQUA, colours.DARK_AQUA, colours.DARK_AQUA, colours.BLUE, colours.GRAY], symbol: symbols.SECOND },
    { name: "Ruby Prime", color: [colours.GRAY, colours.RED, colours.RED, colours.RED, colours.RED, colours.DARK_RED, colours.GRAY], symbol: symbols.SECOND },
    { name: "Crystal Prime", color: [colours.GRAY, colours.LIGHT_PURPLE, colours.LIGHT_PURPLE, colours.LIGHT_PURPLE, colours.LIGHT_PURPLE, colours.DARK_PURPLE, colours.GRAY], symbol: symbols.SECOND },
    { name: "Opal Prime", color: [colours.GRAY, colours.BLUE, colours.BLUE, colours.BLUE, colours.BLUE, colours.DARK_BLUE, colours.GRAY], symbol: symbols.SECOND },
    { name: "Amethyst Prime", color: [colours.GRAY, colours.DARK_PURPLE, colours.DARK_PURPLE, colours.DARK_PURPLE, colours.DARK_PURPLE, colours.DARK_GRAY, colours.GRAY], symbol: symbols.SECOND },

    { name: "Mirror", color: [colours.DARK_GRAY, colours.GRAY, colours.WHITE, colours.WHITE, colours.GRAY, colours.GRAY, colours.DARK_GRAY], symbol: symbols.THIRD },
    { name: "Light", color: [colours.WHITE, colours.WHITE, colours.YELLOW, colours.YELLOW, colours.GOLD, colours.GOLD, colours.GOLD], symbol: symbols.THIRD },
    { name: "Dawn", color: [colours.GOLD, colours.GOLD, colours.WHITE, colours.WHITE, colours.AQUA, colours.DARK_AQUA, colours.DARK_AQUA], symbol: symbols.THIRD },
    { name: "Dusk", color: [colours.DARK_PURPLE, colours.DARK_PURPLE, colours.LIGHT_PURPLE, colours.LIGHT_PURPLE, colours.GOLD, colours.YELLOW, colours.YELLOW], symbol: symbols.THIRD },
    { name: "Air", color: [colours.AQUA, colours.AQUA, colours.WHITE, colours.WHITE, colours.GRAY, colours.GRAY, colours.DARK_GRAY], symbol: symbols.THIRD },
    { name: "Wind", color: [colours.WHITE, colours.WHITE, colours.GREEN, colours.GREEN, colours.DARK_GREEN, colours.DARK_GREEN, colours.DARK_GREEN], symbol: symbols.THIRD },
    { name: "Nebula", color: [colours.DARK_RED, colours.DARK_RED, colours.RED, colours.RED, colours.LIGHT_PURPLE, colours.LIGHT_PURPLE, colours.DARK_PURPLE], symbol: symbols.THIRD },
    { name: "Thunder", color: [colours.YELLOW, colours.YELLOW, colours.WHITE, colours.WHITE, colours.DARK_GRAY, colours.DARK_GRAY, colours.DARK_GRAY], symbol: symbols.THIRD },
    { name: "Earth", color: [colours.GREEN, colours.GREEN, colours.DARK_GREEN, colours.DARK_GREEN, colours.GOLD, colours.GOLD, colours.YELLOW], symbol: symbols.THIRD },
    { name: "Water", color: [colours.AQUA, colours.AQUA, colours.DARK_AQUA, colours.DARK_AQUA, colours.BLUE, colours.BLUE, colours.DARK_BLUE], symbol: symbols.THIRD },
    { name: "Fire", color: [colours.YELLOW, colours.YELLOW, colours.GOLD, colours.GOLD, colours.RED, colours.RED, colours.DARK_RED], symbol: symbols.THIRD },
];

function generatePrestige(level) {
    const prestige = prestigeColours[Math.min(Math.floor(level / 100), prestigeColours.length - 1)];

    const formatted = `[${level}${prestige.symbol}]`;
    ctx.font = "60px Minecraft";

    if (Array.isArray(prestige.color)) {
        let chars = formatted.split("");

        let x = 20;
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            const color = prestige.color[i];

            ctx.fillStyle = shadows.get(color);
            ctx.fillText(char, x + 4, canvas.height - 16);

            ctx.fillStyle = color;
            ctx.fillText(char, x, canvas.height - 20);

            x += ctx.measureText(char).width + 1;
        }
    } else {
        ctx.fillStyle = shadows.get(prestige.color);
        ctx.fillText(formatted, 24, canvas.height - 16);

        ctx.fillStyle = prestige.color;
        ctx.fillText(formatted, 20, canvas.height - 20);
    }

    return canvas.toBuffer();
}


app.get("/prestigeImage/:level", (req, res) => {
    let level = req.params.level;

    let buffer = generatePrestige(level);
    res.contentType("image/png");
    res.send(buffer);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const port = 4000;
app.listen(port, () => {
    console.log(`Prestige Image Processor (PIP) now running at port ${port}.`);
});



