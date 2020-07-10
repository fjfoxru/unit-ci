export default function line (status) {
    if (status.health > 50) {
        return 'healthy';
    } else if (status.health < 50 && status.health > 15) {
        return 'wounded';
    } else if (status.health < 15) {
        return 'critical';
    }
}