function downloadResume() {
    const pdfContent = document.documentElement.outerHTML;
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // Create a hidden anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = url;
    anchor.download = 'Charles_Oluwaseun_Adepoju_Resume.pdf';

    // Append the anchor to the body and click it to start the download
    document.body.appendChild(anchor);
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
}
