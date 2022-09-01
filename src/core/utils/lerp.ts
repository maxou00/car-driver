export function lerp(from: number, to: number, time: number) {
    return from + (to - from) * time;
}