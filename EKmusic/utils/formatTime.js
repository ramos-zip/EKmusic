export default function formatTime(segunds) {
    if (!Number.isFinite(segunds) || segunds < 0) {
        return '00:00';
    }

    const totalSeconds = Math.floor(segunds);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}