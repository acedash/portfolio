// Minimal toast stub to avoid UI dependencies in builds
export type ToastProps = {
	id?: string;
	title?: string;
	description?: string;
	variant?: "default" | "destructive" | string;
};

export function useToast() {
	return {
		toast: (_: ToastProps) => {
			// no-op in production; replace with your own UI toast if needed
		},
	};
}

export function toast(_: ToastProps) {
	// no-op helper
}
