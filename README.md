<style>
	.ok {
		color: green;
	}
</style>

# Intern demo
The idea behind this repo is to directly compare what you can do with [dalek.js](http://dalekjs.com/) and [theintern](http://theintern.io). This one is intern, very soon there will be another repo, hopefully implementing the exact same thing using dalek. 

I'm hoping to summarise the two in a blogpost very soon, and these two repos are being used to organise my thoughts, and maybe even prove some of my points. I'm also hoping that they'll be a good starting point for using either of the two projects. Its also meant to be a positive exploration of both projects, not a negative comparison, much &lt;3 to both :)

## Trying it out
To try stuff out I would recommend cloning this repo, and then opening two shell tabs into the root of the dir containing this repo's contents. 

### To test locally:

- Unzip selenium (it lives in test/resources/selenium-server-2.33.0.zip)
- Unzip chromedriver  - it lives in test/resources/chromedriver_mac32_2.2.zip - you'll need a different one if you're not using a mac - d/l from [here](https://code.google.com/p/chromedriver/downloads/list)
- Start the local selenium server (this runs the one from the repo, there's a wrapper in npm but it doesn't take config which we need...)
- `$ tab1> grunt shell:startLocalSeleniumServer`

- wait until you get a bunch of output from the server, hopefully ending in it telling you Jetty is happy, a bit like this :

	`Started org.openqa.jetty.jetty.Server@42698403`

- `$ tab2> grunt intern:local`
- Output should look a bit like this : 

	<pre>
	Running "intern:local" (intern) task
	Listening on 0.0.0.0:9000
	<span class="ok">&gt;&gt;</span> 0/0 tests passed
	<span class="ok">&gt;&gt;</span> PASS: main - demo - hello world test (1ms)
	<span class="ok">&gt;&gt;</span> 1/1 tests passed
	<span class="ok">&gt;&gt; </span>1/1 tests passed
	<span class="ok">Done, without errors.</span>
	</pre>

### To test against sauce labs:

- Ensure you've configured sauce labs env vars $SAUCE\_USERNAME and $SAUCE\_ACCESS\_KEY - you can get your access key from the bottom left of your [saucelabs login](https://saucelabs.com/account)
then run: 

- Start SauceLabs connect, which'll set up the proxy that forwards the testing commands up to Sauce Labs
- `$ tab1> grunt shell:startSauceSeleniumConnect`
- You should get some output like the following. Wait until it says "Testing tunnel ready" to proceed.
	<pre>
	Running "shell:startSauceSeleniumConnect" (shell) task
	Opening local tunnel using Sauce Connect
	Testing tunnel ready
	</pre>

- `$ tab2> grunt intern:sauce`
- Output is identical to when you run it locally (assuming it works!):
	<pre>
	Running "intern:sauce" (intern) task
	Listening on 0.0.0.0:9000
	<span class="ok">&gt;&gt;</span> 0/0 tests passed
	<span class="ok">&gt;&gt;</span> PASS: main - demo - hello world test (1ms)
	<span class="ok">&gt;&gt;</span> 1/1 tests passed
	<span class="ok">&gt;&gt; </span>1/1 tests passed
	<span class="ok">Done, without errors.</span>
	</pre>