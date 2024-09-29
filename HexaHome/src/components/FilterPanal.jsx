import React from 'react';

const FilterPanel = ({ filters, onFilterChange }) => {
    const handleTypeChange = (e) => {
        const { value, checked } = e.target;
        onFilterChange((prevFilters) => {
            if (checked) {
                return {
                    ...prevFilters,
                    propertyType: [...prevFilters.propertyType, value],
                };
            } else {
                return {
                    ...prevFilters,
                    propertyType: prevFilters.propertyType.filter((type) => type !== value),
                };
            }
        });
    };

    const handleFacingChange = (e) => {
        const { value, checked } = e.target;
        onFilterChange((prevFilters) => {
            if (checked) {
                return {
                    ...prevFilters,
                    propertyFacing: [...prevFilters.propertyFacing, value],
                };
            } else {
                return {
                    ...prevFilters,
                    propertyFacing: prevFilters.propertyFacing.filter((facing) => facing !== value),
                };
            }
        });
    };

    const handleBudgetChange = (e) => {
        const newBudget = [0, e.target.value];
        onFilterChange({ ...filters, budgetRange: newBudget });
    };

    const handleAreaChange = (e) => {
        const newArea = [0, e.target.value];
        onFilterChange({ ...filters, areaRange: newArea });
    };

    const handlePostedByChange = (e) => {
        const { value, checked } = e.target;
        onFilterChange((prevFilters) => {
            if (checked) {
                return {
                    ...prevFilters,
                    postedBy: [...prevFilters.postedBy, value],
                };
            } else {
                return {
                    ...prevFilters,
                    postedBy: prevFilters.postedBy.filter((option) => option !== value),
                };
            }
        });
    };

    return (
        <div className="filter-panel">
            <h3>Filters</h3>
            <div>
                <label>Property Type</label>
                {["Apartment", "Individual Floor", "Independent House", "Independent Villa", "1Rk/Studio House", "Plot/Land"].map((type) => (
                    <div key={type}>
                        <label>
                            <input
                                type="checkbox"
                                value={type}
                                checked={filters.propertyType.includes(type)}
                                onChange={handleTypeChange}
                            />
                            {type}
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <label>Budget Range</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.budgetRange[1]}
                    onChange={handleBudgetChange}
                />
            </div>
            <div>
                <label>Plot Area</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.areaRange[1]}
                    onChange={handleAreaChange}
                />
            </div>
            <div>
                <label>Facing</label>
                {["north", "south", "east", "west", "northEast", "northWest", "southEast", "southWest"].map((facing) => (
                    <div key={facing}>
                        <label>
                            <input
                                type="checkbox"
                                value={facing}
                                checked={filters.propertyFacing.includes(facing)}
                                onChange={handleFacingChange}
                            />
                            {facing.charAt(0).toUpperCase() + facing.slice(1)}
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <label>Posted by</label>
                {["owner", "dealer", "builder"].map((poster) => (
                    <div key={poster}>
                        <label>
                            <input
                                type="checkbox"
                                value={poster}
                                checked={filters.postedBy.includes(poster)}
                                onChange={handlePostedByChange}
                            />
                            {poster.charAt(0).toUpperCase() + poster.slice(1)}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterPanel;
