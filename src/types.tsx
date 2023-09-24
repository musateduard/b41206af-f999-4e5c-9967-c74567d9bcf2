

export type EventItemData = {
    _id:        string;
    title:      string;
    flyerFront: string;
    attending:  number;
    date:       Date;
    startTime:  Date;
    endTime:    Date;
    contentUrl: string;
    venue:      Venue;
    artists:    Artist[];
    city:       string;
    country:    string;
    private:    boolean;
    __v:        number;
}

export type Artist = {
    id:   string;
    name: string;
    _id:  ID;
}

export type ID = {
    $oid: string;
}

export type Venue = {
    id:         string;
    name:       string;
    contentUrl: string;
    live:       boolean;
    direction:  string;
}
