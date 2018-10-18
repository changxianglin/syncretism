function Ninja() {
	var feints = 0
	this.getFeints = function() {
	return feints
	}
	this.feints = function() {
	feints++
	}
}

var ninja1 = new Ninja() 

ninja1.feints()

var ninja2 = new Ninja()

