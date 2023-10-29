export class HousingPred {
    public bedrooms: any;
    public bathrooms: any;
    public sqft_living: any;
    public sqft_lot: any;
    public floors: any;
    public waterfront: any;
    public view: any;
    public condition: any;
    public yr_built: any;
    public days_listed: any;
    public listings: any;
    public city: any;

    constructor(bedrooms: any, bathrooms: any, sqft_living: any, sqft_lot: any, floors: any, waterfront: any, view: any, condition: any, yr_built: any, days_listed: any, listings: any, city: any) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.sqft_living = sqft_living;
        this.sqft_lot = sqft_lot;
        this.floors = floors;
        this.waterfront = waterfront;
        this.view = view;
        this.condition = condition;
        this.yr_built = yr_built;
        this.days_listed = days_listed;
        this.listings = listings;
        this.city = city;
    }
}
