var request = require('request');

describe('calc', () => {
	it('should multiply 2 and 2', () => {
		expect(2*2).toBe(4)
	})
})


describe('get messages', () => {
	it('sholud return 200 ok', (done) => {
		request.get('http://localhost:3000/messages', (err, res) => {
			console.log(res.body);
			expect(res.statusCode).toEqual(200)
			done()
		})
	})

	it('sholud return a list, thats not empty', (done) => {
		request.get('http://localhost:3000/messages', (err, res) => {
			expect(JSON.parse(res.body).length).toBeGreaterThan(0)
			done()
		})
	})
})

describe('get messages from user', () => {
	it('sholud return 200 ok', (done) => {
		request.get('http://localhost:3000/messages/HImanshu', (err, res) => {
			expect(res.statusCode).toEqual(200)
			done()
		})
	})
	it('name should be HImanshu', (done) => {
		request.get('http://localhost:3000/messages/HImanshu', (err, res) => {
			expect(JSON.parse(res.body)[0].name).toEqual('HImanshu')
			done()
		})
	})
})