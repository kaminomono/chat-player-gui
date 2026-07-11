
export function attachToggleThemeButton() {
    const option_toggle_theme = <HTMLButtonElement>document.getElementById('option-toggle-theme');
    option_toggle_theme?.addEventListener('click', () => {
        let curTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'dark';
        if (curTheme == 'dark')
            newTheme = 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    });
}