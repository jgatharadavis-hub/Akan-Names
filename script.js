const styles = `
#result {
    margin-top: 20px;
    padding: 15px;
    background: #fdf3cf;
    border: 2px solid #d35400;
    border-radius: 8px;
    text-align: center;
    font-size: 1.2rem;
    display: none; /* Hidden until generated */
}

.highlight {
    color: #d35400;
    font-weight: bold;
    font-size: 1.5rem;
}
`;

const styleEl = document.createElement('style');
styleEl.textContent = styles;
document.head.appendChild(styleEl);
