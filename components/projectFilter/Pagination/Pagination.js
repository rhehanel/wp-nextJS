export const Pagination = ({ totalPages, onPageClick }) => {
    return (
        <div className="pagenation">
            {Array.from({ length: totalPages }).map((_, i) => (
                <div
                    key={i}
                    className="btn"
                    onClick={() => {
                        onPageClick(i + 1);
                    }}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    )

}