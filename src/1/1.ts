export function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
    if (!/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(hex)) {
        return null;    
    }

    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}
