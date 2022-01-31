export interface Charger {
  id?: number;
  chargePointId: string;
  name: string;
  shortName: string;
  maximumPower: number;
  groupName: string;
  firmwareVersion: string;
}

export interface Response {
  content: Charger[];
  totalCount: number;
}
