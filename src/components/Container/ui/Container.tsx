import "./style.scss";

export function Container ({children}: {children: React.ReactNode}): React.ReactElement {
    return (
        <div className="container">
            {children}
        </div>
    );
}