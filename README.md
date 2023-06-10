# Learing TypeScript as a C developer

First we start by reading the ts [docs](https://www.typescriptlang.org/docs/handbook/), seems pretty good and straight forward. Well, but how do we test their code snippets, hmm?

Then we realise it's just like `c` you compile to something like objets then do something like linking `main`, there's only really one obvious move left, we write a `Makefile`.

```Makefile
NAME = main.html

FLAGS = --strict

FILES = hello

TARGETS = $(addprefix $(FILES), .js)
SCRIPTS := $(addprefix <script src=", $(TARGETS))
SCRIPTS := $(addprefix $(SCRIPTS), "></script>)

%.js: %.ts
	tsc $(FLAGS) $<

all : $(TARGETS)
	echo "<html>" >$(NAME)
	echo '$(SCRIPTS)' >>$(NAME)
	echo "</html>" >>$(NAME)

clean :
	$(RM) $(TARGETS)

```

And also, we musn't forget to add these _intermediate_ products to our .gitignore

```txt
*.js
main.html
```
