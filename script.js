function createPHPFile() {
    const content = document.getElementById('phpContent').value;
    const blob = new Blob([content], { type: 'text/php' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file.php';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
