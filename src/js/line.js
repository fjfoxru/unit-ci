export default function line (status) {
    if (status.health >= 50 && status.health <= 100) {
        return 'healthy';
    } else if (status.health <= 49 && status.health >= 15) {
        return 'wounded';
    } else if (status.health <= 14 && status.health > 0) {
        return 'critical';
    } else {
        return 'error';
    }
}