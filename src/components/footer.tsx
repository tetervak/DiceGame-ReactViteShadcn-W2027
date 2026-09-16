type FooterProps = {
    name?: string;
};

export function Footer({name}: FooterProps) {
    return (
        <footer className="container mx-auto flex flex-col items-center py-3 mt-8 border-t text-sm">
            <div>PROG27545 / Web Application Design and Implementation</div>
            <div>Sheridan College, {name ?? 'Ontario'}</div>
        </footer>
    );
}