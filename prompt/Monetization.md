# Styling Guide for Game Monetization Platform

This guide outlines the key styling principles and techniques used in our Game Monetization Platform project. Use this as a reference when creating new components to maintain consistency across the application.

## Color Palette

Our primary color scheme revolves around vibrant greens and blacks:

- Primary Green: #00D632
- Secondary Green: #00FF94
- Background: Black (#000000)
- Text: White (#FFFFFF) for high contrast

Use these colors for main UI elements, accents, and text to maintain visual consistency.

## Typography

- Main Font: Use a sans-serif font family (e.g., Inter, Roboto, or system-ui)
- Headings: Bold, large sizes (e.g., text-5xl for main headings)
- Body Text: Regular weight, comfortable reading size (e.g., text-xl for paragraphs)

## Layout

- Use flexbox and grid for responsive layouts
- Center content both vertically and horizontally in full-height sections
- Utilize `container` class for consistent content width across different screen sizes

## Components

### Buttons

- Use gradient backgrounds for primary actions
- Implement hover effects that swap gradient direction
- Add backdrop blur for semi-transparent backgrounds

Example:
```jsx
<Button
  size="lg"
  className="bg-gradient-to-r from-[#00D632] to-[#00FF94] text-black hover:from-[#00FF94] hover:to-[#00D632] text-lg px-8"
>
  Start Monetizing
</Button>
```