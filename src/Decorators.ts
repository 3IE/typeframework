module TF {
	export class Decorators {
		static HttpGet(target: Function, key: string, value: any) {
			return {
				value: function(...args: any[]) {
					if (this.request.method !== "GET") {
						this.response.setStatus(404)
						this.content("The requested URL was not found on this server");
					} else {
						// convert list of arguments' action to string
						var a = args.map(a => JSON.stringify(a)).join();
						// invoke action and get its return value
						var result = value.value.apply(this, args);
					}
				}
			};
		}

		static HttpPost(target: Function, key: string, value: any) {
			return {
				value: function(...args: any[]) {
					if (this.request.method !== "POST") {
						this.response.setStatus(404)
						this.content("The requested URL was not found on this server");
					} else {
						// convert list of arguments' action to string
						var a = args.map(a => JSON.stringify(a)).join();
						// invoke action and get its return value
						var result = value.value.apply(this, args);
					}
				}
			};
		}
		
		static HttpPut(target: Function, key: string, value: any) {
			return {
				value: function(...args: any[]) {
					if (this.request.method !== "PUT") {
						this.response.setStatus(404)
						this.content("The requested URL was not found on this server");
					} else {
						// convert list of arguments' action to string
						var a = args.map(a => JSON.stringify(a)).join();
						// invoke action and get its return value
						var result = value.value.apply(this, args);
					}
				}
			};
		}
		
		static HttpDelete(target: Function, key: string, value: any) {
			return {
				value: function(...args: any[]) {
					if (this.request.method !== "DELETE") {
						this.response.setStatus(404)
						this.content("The requested URL was not found on this server");
					} else {
						// convert list of arguments' action to string
						var a = args.map(a => JSON.stringify(a)).join();
						// invoke action and get its return value
						var result = value.value.apply(this, args);
					}
				}
			};
		}
	}
}