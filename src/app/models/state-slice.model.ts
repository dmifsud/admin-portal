export interface StateSlice<T> {
	data: T;
	loading: boolean;
	loaded: boolean;
	error: boolean | null;
}