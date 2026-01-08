# Etch-A-Sketch

A interactive drawing grid application inspired by the classic Etch-A-Sketch toy. Create pixel art by hovering your mouse over grid squares to paint them with colors.

## Features

- **Dynamic Grid Generation**: Click the "Add Grid squares" button to create a custom grid. Enter the number of squares per side (e.g., 16 for a 16x16 grid)
- **Interactive Drawing**: Hover over grid squares to paint them orange
- **Responsive Canvas**: 500x500px drawing area that automatically adjusts square sizes based on grid dimensions
- **Input Validation**: Ensures only valid numeric inputs are accepted for grid size
- **Smooth Interactions**: Hover effects and button animations for better user experience

## How to Use

1. Open `index.html` in your web browser
2. The grid starts with a default 16x16 layout
3. Click the **"Add Grid squares"** button to customize the grid size
4. Enter the number of squares you want per side
5. Move your mouse over the grid squares to draw
6. Repeat steps 3-5 to create a new grid with a different size

## Project Structure

```
etch-a-sketch/
├── index.html      # Main HTML file with grid container and button
├── index.js        # JavaScript logic for grid generation and drawing
├── styles.css      # Styling and layout
├── LICENSE         # GNU General Public License v3
└── README.md       # This file
```

## Technical Details

- **Language**: HTML5, CSS3, JavaScript (Vanilla)
- **Grid Container**: 500x500 pixel flex container
- **Drawing Mechanism**: Mouse hover events with dynamic class toggling
- **Browser Compatibility**: Works on all modern browsers that support ES6 JavaScript

## License

This project is licensed under the GNU General Public License v3 - see the [LICENSE](LICENSE) file for details.