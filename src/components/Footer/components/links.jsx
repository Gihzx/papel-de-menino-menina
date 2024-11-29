import PropTypes from 'prop-types';

export function Links({ title, links }) {
    return (
        <>
            <div>
                <h4>{title}</h4>
                {links.map((link, index) => (
                    <p key={index}><a href={link.href} style={{ textDecoration: "none", color: "#000" }}>{link.name}</a></p>
                ))}
            </div>
        </>
    )
}

Links.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
};