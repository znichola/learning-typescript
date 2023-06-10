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

