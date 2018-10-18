functin Ninja() {
	var feints = 0
	this.getFeints = function() {
		return feints
	}
	this.feints = function() {
		feints++
	}
	}

var ninja1 = new Ninja()
ninja1.feint()


var imposter = {}
imposter.getFeints = ninja1.getFeints
